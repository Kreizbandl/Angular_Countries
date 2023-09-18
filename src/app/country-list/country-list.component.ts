import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CountriesServiceService } from '../countries-service.service';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Country } from '../country.interface';
import { filter } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, AfterViewInit{
  
  countries: Country[] = [];
  searchTerm: string | null | undefined = null;
  showCountries = '';

  constructor(
    private activatedRouter: ActivatedRoute, 
    private service: CountriesServiceService,
  ){}

  ngAfterViewInit() {
    this.setFocusOnFirstElement();
  }
  
  /* Setzt Fokus nach Initialisierung der Ansicht auf erstes Element */
  private setFocusOnFirstElement(){
    const testFocusButton: HTMLElement | null = document.querySelector('#country-0');
    if (testFocusButton) {
      testFocusButton.focus();
    }
  }

  ngOnInit(): void {
    /* Reagiert auf Änderungen des Suchbegriffs */
    this.activatedRouter.params.subscribe(params => {
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
          this.showCountries = 'Nothing found for "' + this.searchTerm + '"';
        }else{
          /* Zeigt gefundene Länder */
          this.showCountries = 'Found Countries for "' + this.searchTerm + '"';
        }
      }
    });
  }

} 
