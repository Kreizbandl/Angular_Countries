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
  showCountries = '';

  constructor(
    private router: ActivatedRoute, 
    private service: CountriesServiceService
  ){}

  ngOnInit(): void {
    /* Reagiert auf Änderungen des Suchbegriffs */
    this.router.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];

      /* Lädt alle Länder, wenn kein Suchbegriff vorhanden */
      if(this.searchTerm === null || this.searchTerm === undefined){
        this.showCountries = 'All Countries';
        this.countries = this.service.countries;
      }else{
        /* Lädt nur gesuchte Länder */
        this.countries = this.service.getCountriesBySearch(this.searchTerm);

        /* Zeigt Fehlermeldung, wenn keine Länder gefunden wurden */
        if(this.countries.length === 0){
          this.showCountries = 'Nothing found for ' + this.searchTerm;
        }else{
          /* Zeigt gefundene Länder */
          this.showCountries = 'Found Countries for ' + this.searchTerm;
        }
      }
    });
  }

} 
