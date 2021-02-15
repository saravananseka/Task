import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleComponent } from './multiple/multiple.component';
import {MatAccordion} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      MatAccordion

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
