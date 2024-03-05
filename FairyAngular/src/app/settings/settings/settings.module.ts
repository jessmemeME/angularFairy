import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SettingsComponenteComponent } from './settings-componente/settings-componente.component';
import {SettingsService} from './settings.service';
import { SettingsRoutingModule } from './settings-routing/settings-routing.module';

@NgModule({
  declarations: [SettingsComponenteComponent],//colocar todos los componentes entre comas
  imports: [CommonModule,SettingsRoutingModule,FormsModule,RouterModule],//colocar los modulos entre comas
  providers:[SettingsService]
})
export class SettingsModule { }


