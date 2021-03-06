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
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
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
    ParentComponent,
    AboutComponent,
    ServicesComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    FormComponent,
    PipeComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
