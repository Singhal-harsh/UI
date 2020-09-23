import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import {RandomComponent} from './components/random.component';
import { userTestComponent } from './components/userTest.component';
import { Page2RandomComponent } from "./components/page2random.component";

@NgModule({
  declarations: [
    AppComponent , RandomComponent, userTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
