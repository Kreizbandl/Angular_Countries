import { Component } from '@angular/core';
import { CountriesServiceService } from '../countries-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  searchTerm = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: CountriesServiceService
  ){}

  /* Navigation zur Länderliste mit dem eingegebenen Suchbegriff */
  goToCountriesList(): void {
    if(this.searchTerm !== ''){
      this.router.navigate(['/country-list', this.searchTerm]);
    }
  }

}
