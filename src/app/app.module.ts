import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import {RandomComponent} from './components/random.component';
import { userTestComponent } from './components/userTest.component';
import { HomeComponent } from './components/homepage.component'
import {RouterModule, Router, Routes} from'@angular/router';
import { DatePipe } from '@angular/common';

import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, RandomComponent, userTestComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'userInput', component : userTestComponent},
      { path: 'random', component : RandomComponent},
      { path: '', component : HomeComponent} 
  ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent, RandomComponent, userTestComponent, HomeComponent]
})
export class AppModule { }
