import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input('image-url') imagePath:string;
  @Output('dummy') select = new EventEmitter();

  clickHandler(value){
    console.log(value);
    this.select.emit(value);
  }
 
}
