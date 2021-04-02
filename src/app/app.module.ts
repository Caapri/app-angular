import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdsModule } from '@cds/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import '@cds/core/icon/register.js';
import { ClarityIcons } from '@cds/core/icon';
import { HomeComponent } from './components/home/home.component';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';

ClarityIcons.addIcons()

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
