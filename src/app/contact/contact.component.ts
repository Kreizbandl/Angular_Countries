import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm(): void{
    console.log(JSON.stringify(this.formData));
    /* this.formData.name = '';
    this.formData.email = '';
    this.formData.message = ''; */
  }
}
