import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponenteComponent } from './payment-componente/payment-componente.component';
import { PaymentInsertComponent } from './payment-insert/payment-insert.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentUpdateComponent } from './payment-update/payment-update.component';



@NgModule({
  declarations: [
    PaymentComponenteComponent,
    PaymentInsertComponent,
    PaymentListComponent,
    PaymentUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
