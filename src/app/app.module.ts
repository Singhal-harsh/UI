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
import { FirstComponent} from './components/firstpage.component';
import { HomeComponentFra} from './components/FRA/homepageFra.component';
import { HomeComponentMain} from './components/homepageMain.component';

@NgModule({
  declarations: [
    AppComponent, RandomComponent, userTestComponent, HomeComponent, userTestComponentCac, RandomComponentCac,
     HomeComponentCac, FraRandomComponent, userTestComponentFra, HomeComponentFra, FirstComponent, HomeComponentMain
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'}, 
      { path: 'usertestfx', component : userTestComponent},
      { path: 'randomfx', component : RandomComponent},
      { path: 'homefx', component : HomeComponent},
      { path: 'usertestcac', component : userTestComponentCac},
      { path: 'randomcac', component : RandomComponentCac},
      { path: 'homecac', component : HomeComponentCac},
      { path:'usertestfra',component: userTestComponentFra},
      { path:'randomfra',component:FraRandomComponent},
      { path:'homefra',component: HomeComponentFra}, 
      { path:'home', component: HomeComponentMain},
      { path:'firstpage', component:FirstComponent}
  ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent, RandomComponent, userTestComponent, HomeComponent, userTestComponentCac, RandomComponentCac, HomeComponentCac, FraRandomComponent, HomeComponentMain]
})
export class AppModule { }
