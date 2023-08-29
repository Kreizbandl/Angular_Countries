import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesServiceService } from '../countries-service.service';
import { Country } from '../country.interface';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit{
  receivedCountryName!: string;
  country: Country | undefined;

  constructor(private route: ActivatedRoute,
    private service: CountriesServiceService){}

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      this.receivedCountryName = params['data'];
      /* console.log(this.receivedCountryName); */
    })
    this.country = this.service.getCountryByName(this.receivedCountryName);
    /* console.log(this.country); */
  }
}
