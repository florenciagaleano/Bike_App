import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterimagesPipe } from './pipes/filterimages.pipe';
import { GoogleMapsModule } from '@angular/google-maps';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    ImageGalleryComponent,
    ViewRegistrationComponent,
    ImageDetailsComponent,
    FilterimagesPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
