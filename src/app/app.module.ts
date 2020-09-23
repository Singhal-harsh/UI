import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import {RandomComponent} from './components/random.component';
import { userTestComponent } from './components/userTest.component';
import {RouterModule, Router, Routes} from'@angular/router';

@NgModule({
  declarations: [
    AppComponent, RandomComponent, userTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'userInput', component : userTestComponent},
      { path: 'random', component : RandomComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
