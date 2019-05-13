import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:number;
  constructor(private activatedRoute:ActivatedRoute, private courseService:CourseService) {
    console.log('came inside the product details component....')
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(`Loading the details of the product with id ${this.id}`)
   }

  ngOnInit() {
    this.courseService.findPhotosById(this.id).subscribe(data=>console.log(data));
  }


}
