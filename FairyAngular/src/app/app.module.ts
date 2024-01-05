import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from './auth/auth.service'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
//Aqui llama a los componentes y servicios de las aplicaciones
import { AccountsComponent } from './accounts/accounts.component';
import {AccountsService} from './accounts/accounts.service'



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavBarComponent,
    SideMenuComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    provideClientHydration(),
    AuthService,
    AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
