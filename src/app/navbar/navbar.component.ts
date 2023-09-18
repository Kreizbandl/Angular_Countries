import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from '../countries-service.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  searchTerm = '';
  isLinkActive: boolean = false;
  isButtonActive: boolean = false;

  constructor(
    private router: Router
  ){}

  /* Navigation zur Länderliste mit dem eingegebenen Suchbegriff */
  goToCountriesList(): void {
    if(this.searchTerm !== ''){
      this.isLinkActive = true;
      this.router.navigate(['/country-list', this.searchTerm]);
    }
  }

}
