import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';


const routes: Routes = [
  /* Weiterleitung der leeren URL auf die Startseite */
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  /* Routen zur jeweiligen Seite */
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'country-list', component: CountryListComponent },
  /* Route zur Filterung der Länderliste */
  { path: 'country-list/:searchTerm', component: CountryListComponent },
  /* Detailansicht für ein bestimmtes Land */
  { path: 'country-detail', component: CountryDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
