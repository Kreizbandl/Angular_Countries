import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit{

  /* Formulardaten */
  formData = {
    name: '',
    email: '',
    message: ''
  };
  /* Zustandvariable für Anzeigemodus */
  isFormSubmitted: boolean = false;

  constructor( private router: Router ){
    /* Überwacht Router-Ereignisse, für Fokus auf erstes Element und Zurücksetzten des Formulars */
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.setFocusOnFirstElement();
    });
  }
  
  /* Methode zum setzten des Fokus auf das erste Element */
  private setFocusOnFirstElement(){
    const testFocusButton: HTMLElement | null = document.querySelector('#name');
    if (testFocusButton) {
      testFocusButton.focus();
    }
  }

  submit(): void{
    this.isFormSubmitted = true;
    console.log(JSON.stringify(this.formData));
    /* Weiterverarbeitung der Daten... */
  }

  /* Setzt Fokus nach Initialisierung der Ansicht auf erstes Element */
  ngAfterViewInit() {
    this.setFocusOnFirstElement();
    this.isFormSubmitted = false;
  }

}
