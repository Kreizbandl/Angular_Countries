import { Injectable } from '@angular/core';
import jsonCountries from './countries.json';

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
@Injectable({
  providedIn: 'root'
})
//TODO: change name
export class CountriesServiceService {
  countries: ICountry[] = jsonCountries;

  constructor() {
    this.sortCountriesByName();
  }

  //TODO: remove
  getCountries(): ICountry[] {
    return this.countries;
  }

  sortCountriesByName(): void {
    this.countries.sort((a,b) => {
      return a.name.common.localeCompare(b.name.common);
    })
  }

  getCountryByName(name: string): ICountry | undefined{
    return this.countries.find(country => country.name.common === name);
  }
}
