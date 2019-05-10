import { Component } from '@angular/core';
import { CourseService as CS } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent{

  courseservice:CS;
  courses;
  errorMessage;
  constructor(courseService: CS){
    courseService.getAllCourses().subscribe(data => {
      console.log('printing the data ')
      console.log(data);
      this.courses = data
    }, 
      (error)=> this.errorMessage = error);  
  }
  

  checkOffer(course){
    console.log(`Button is clicked ${course.title}`)
    course.offer = !course.offer;
  }

  onSelectedCourse(value){
    console.log('Output handled in the parent component');
    console.log(value);
  }

}
