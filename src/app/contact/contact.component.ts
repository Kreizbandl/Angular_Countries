import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit{

  formData = {
    name: '',
    email: '',
    message: ''
  };
  isFormSubmitted: boolean = false;

  constructor(
    private router: Router
  ){
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.setFocusOnFirstElement();
    });
  }
  /* ngOnInit(): void {
    this.isFormSubmitted = false;
  } */

  submit(): void{
    this.isFormSubmitted = true;
    console.log(JSON.stringify(this.formData));
  }

  ngAfterViewInit() {
    this.setFocusOnFirstElement();
    this.isFormSubmitted = false;
  }

  private setFocusOnFirstElement(){
    const testFocusButton: HTMLElement | null = document.querySelector('#name');
    if (testFocusButton) {
      testFocusButton.focus();
    }
  }
}
