import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreationComponent } from '../event-creation/event-creation.component';
import { EventListComponent } from '../components/event-list/event-list.component';

const routes: Routes = [
  { path: '', component: EventListComponent },  // Página principal de eventos
  { path: 'create', component: EventCreationComponent } // Crear nuevo evento
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventCreationRoutingModule { }
