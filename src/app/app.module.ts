import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import {RandomComponent} from './components/FXArbitrage/random.component';
import { userTestComponent } from './components/FXArbitrage/userTest.component';
import { HomeComponent } from './components/FXArbitrage/homepage.component';
import {RandomComponentCac} from './components/CashandCarry/randomCac.component';
import {HomeComponentCac} from './components/CashandCarry/homepageCac.component';
import {userTestComponentCac} from './components/CashandCarry/userTestCac.component';
import { FraRandomComponent } from './components/FRA/fra.random.component';
import {userTestComponentFra} from './components/FRA/userTestFra.component';
import {RouterModule, Router, Routes} from'@angular/router';
import { DatePipe } from '@angular/common';

import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, RandomComponent, userTestComponent, HomeComponent, userTestComponentCac, RandomComponentCac,
     HomeComponentCac, FraRandomComponent, userTestComponentFra
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'userInput', component : userTestComponent},
      { path: 'random', component : RandomComponent},
      { path: 'home', component : HomeComponent},
      { path: 'userInputCac', component : userTestComponentCac},
      { path: 'randomCac', component : RandomComponentCac},
      { path: 'homeCac', component : HomeComponentCac},
      { path:'fra-random',component:FraRandomComponent},
      { path:'userTestFra',component: userTestComponentFra}
     
  ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent, RandomComponent, userTestComponent, HomeComponent, userTestComponentCac, RandomComponentCac, HomeComponentCac, FraRandomComponent]
})
export class AppModule { }
