import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { AlertService } from './alert/alert.service';



@NgModule({
  declarations: [
    AlertComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule
  ],exports:[AlertComponent]
})
export class UtilityModule { }
