import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
import { ServicesService } from './services.service';
import { routing } from './app.routing';

import { AstronautListComponent } from './astronaut-list/astronaut-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, routing ],
  declarations: [ AppComponent, AstronautListComponent],
  bootstrap:    [ AppComponent ],
  providers: [ServicesService]
})
export class AppModule { }
  