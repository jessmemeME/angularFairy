import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreationComponent } from '../event-creation/event-creation.component';

const routes: Routes = [
  { path: '', component: EventCreationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventCreationRoutingModule { }
