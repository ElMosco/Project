import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAGPUOPFN42JVrBElbJ7Q8-XJYg79MIdTY'}),
    HttpClientModule
    //FormsModule, // <---
    //NgbModule,// <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
