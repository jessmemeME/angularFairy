import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from '../agenda/agenda.component';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
const routes: Routes = [
  {
    path: '',
    component: AgendaComponent
  },
  {
    path: 'event-dialog',
    component: EventDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
