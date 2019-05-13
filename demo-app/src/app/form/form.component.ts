import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router, private courseService:CourseService) { }

  ngOnInit() {
  }

  onSubmit(formData){
    alert(`Form will be submitted with ${formData.value.firstname}`);
    
    this.router.navigate(['/about']);
  }

}
