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

  goToCountriesList(): void {
    if(this.searchTerm !== ''){
      // TODO precheck if countries exist -> avoid empty page
      this.router.navigate(['/country-list', this.searchTerm]);
    }
  }

}
