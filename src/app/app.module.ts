import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CardComponent } from "./card/card.component";
import { FormComponent } from './form/form.component';
import { CardNewComponent } from './card-new/card-new.component';
import { CardTwoComponent } from './card-two/card-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    CardNewComponent,
    CardTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
