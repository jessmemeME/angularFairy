import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClienteMainComponent } from './cliente-main/cliente-main.component';



@NgModule({
  declarations: [
    ClientsComponent,
    ClienteMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
