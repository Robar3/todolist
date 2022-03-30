import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { CardComponent } from './card/card.component';
import {AttributeDirective} from "./atribute.directive";
import {formatPipe} from "./currency.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    formatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
