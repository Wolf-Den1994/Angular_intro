import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from "./card/card.component";
import { FormComponent } from './form/form.component';
import { CardNewComponent } from './card-new/card-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    CardNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
