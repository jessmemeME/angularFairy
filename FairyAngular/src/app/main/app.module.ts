import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from '../UI/nav-bar/nav-bar.component';
import { NotFoundComponent } from '../UI/not-found/not-found.component';
import { SideMenuComponent } from '../UI/side-menu/side-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    SideMenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,    
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
