import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData){
    console.log('came inside the form submit function')
    console.log(formData.value.firstname);
    console.log(formData.value.lastname);
    console.log(formData.value.password);
  }

}
