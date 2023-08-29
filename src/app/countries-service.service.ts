import { Injectable } from '@angular/core';
import jsonCountries from './countries.json';
import { Country } from './country.interface';

@Injectable({
  providedIn: 'root'
})
//TODO: change name
export class CountriesServiceService {
  countries: Country[] = jsonCountries;

  constructor() {
    this.sortCountriesByName();
  }

  //TODO: remove
  getCountries(): Country[] {
    return this.countries;
  }

  private sortCountriesByName(): void {
    this.countries.sort((a,b) => {
      return a.name.common.localeCompare(b.name.common);
    })
  }

  getCountryByName(name: string): Country | undefined{
    return this.countries.find(country => country.name.common === name);
  }
}
