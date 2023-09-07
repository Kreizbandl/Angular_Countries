import { Injectable } from '@angular/core';
import jsonCountries from './countries.json';
import { Country } from './country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {
  countries: Country[] = jsonCountries;

  constructor() {
    this.setAltImgTag();
    this.sortCountriesByName();
  }

  private sortCountriesByName(): void {
    this.countries.sort((a,b) => {
      return a.name.common.localeCompare(b.name.common);
    })
  }

  getCountryByName(name: string): Country | undefined{
    return this.countries.find(country => country.name.common === name);
  }

  setAltImgTag(): void{
    this.countries.find(country => {
      if(country.flags.alt === undefined){
        country.flags.alt = 'Flag of country ' + country.name.common;
      }
    });
  }

  getCountriesBySearch(searchTerm: string): Country[]{
    const foundCountries: Country[] = [];
    this.countries.forEach(country => {
      if(country.name.common.includes(searchTerm)){
        foundCountries.push(country);
      }
    });
    return foundCountries;
  }
}
