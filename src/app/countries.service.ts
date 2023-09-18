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

  /* Sortiert die Länderliste nach dem Namen alphabetisch */
  private sortCountriesByName(): void {
    this.countries.sort((a,b) => {
      return a.name.common.localeCompare(b.name.common);
    })
  }
  /* Legt das alt-Attribut für die Länderflaggen fest, falls nicht definiert */
  private setAltImgTag(): void{
    this.countries.find(country => {
      if(country.flags.alt === undefined){
        country.flags.alt = 'Flag of country ' + country.name.common;
      }
    });
  }
  /* Gibt ein bestimmtes Land nach Namen zurück */
  getCountryByName(name: string): Country | undefined{
    return this.countries.find(country => country.name.common === name);
  }
  /* Gibt Länder zurück, welche den Suchbegriff im Namen enthalten */
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

