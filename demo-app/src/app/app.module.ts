import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { CourseComponent } from './course/course.component';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NavBarComponent,
    MainComponent,
    ProductsComponent,
    CourseComponent,
    ImageComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
