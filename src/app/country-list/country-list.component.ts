import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../countries-service.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country.interface';

//TODO: remove duplicates
/* export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
} */
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit{
  countries: Country[] = [];

  constructor(private router: ActivatedRoute, private service: CountriesServiceService){
  }

  ngOnInit(): void {
    this.countries = this.service.countries;
  }
} 
