import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../countries-service.service';

//TODO: remove duplicates
export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
}
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit{
  countries: ICountry[] = [];

  constructor(private service: CountriesServiceService){
  }

  ngOnInit(): void {
    this.countries = this.service.countries;
  }
} 
