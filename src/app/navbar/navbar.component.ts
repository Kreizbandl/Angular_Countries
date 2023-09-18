import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  searchTerm = '';
  isLinkActive: boolean = false;

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
