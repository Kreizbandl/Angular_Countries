import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../countries-service.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country.interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit{
  
  countries: Country[] = [];
  searchTerm: string | null | undefined = null;
  showCountries: string = '';

  constructor(
    private router: ActivatedRoute, 
    private service: CountriesServiceService
  ){}

  ngOnInit(): void {
    //subscribe to changes of country to search for
    this.router.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];

      //if no search term -> load all countries
      if(this.searchTerm === null || this.searchTerm === undefined){
        this.showCountries = 'All Countries';
        this.countries = this.service.countries;
      }else{
        //only get searched countries
        this.countries = this.service.getCountriesBySearch(this.searchTerm);
        if(this.countries.length === 0){
          //error message 
          this.showCountries = 'Nothing found for ' + this.searchTerm;
        }else{
          //found items
          this.showCountries = 'Found Countries for ' + this.searchTerm;
        }
      }

    });
  }

} 
