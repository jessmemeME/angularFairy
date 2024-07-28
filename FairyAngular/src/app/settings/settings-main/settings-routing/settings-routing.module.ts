import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
// Importar los componentes que se van a leer
import { SettingsComponenteComponent } from '../settings-componente/settings-componente.component';
//import {BasicInfoComponenteComponent} from "../../basic-info/basic-info-componente/basic-info-componente.component";
import { AuthListComponent } from '../../../auth/auth-list/auth-list.component';
import { AuthPermissionsComponent } from '../../../auth/auth-permissions/auth-permissions.component';
//TABLAS DE INFORMACION BASICA
import { BasicInfoAgeGroupListComponent } from '../../basic-info/basic-info-people/basic-info-age-group/basic-info-age-group-list/basic-info-age-group-list.component';
import { BasicInfoDocumentTypeListComponent } from '../../basic-info/basic-info-people/basic-info-document-type/basic-info-document-type-list/basic-info-document-type-list.component';
import { BasicInfoGenderListComponent } from '../../basic-info/basic-info-people/basic-info-gender/basic-info-gender-list/basic-info-gender-list.component';
import { BasicInfoRelationshipBusinessListComponent } from '../../basic-info/basic-info-company/basic-info-relationship-business/basic-info-relationship-business-list/basic-info-relationship-business-list.component';
import { BasicInfoTypeOfDinerListComponent } from '../../basic-info/basic-info-people/basic-info-type-of-diner/basic-info-type-of-diner-list/basic-info-type-of-diner-list.component';
import { BasicInfoTraditionListComponent } from '../../basic-info/basic-info-event/basic-info-tradition/basic-info-tradition-list/basic-info-tradition-list.component';
import { BasicInfoCultureListComponent } from '../../basic-info/basic-info-event/basic-info-culture/basic-info-culture-list/basic-info-culture-list.component';
import { BasicInfoReligionListComponent } from '../../basic-info/basic-info-event/basic-info-religion/basic-info-religion-list/basic-info-religion-list.component';

const routes: Routes = [{
  path:'',
  component: SettingsComponenteComponent,
  children: [
      //{path: 'basic-info', component: BasicInfoComponenteComponent},
      //{path: 'add-rol', component: AuthInsertComponent},
      {path: 'list-rol', component: AuthListComponent},
      {path: 'list-group-perission', component: AuthPermissionsComponent},
      //Llamamos a los componentes de cada tabla de Basic Info
      //{path: 'basic-info', component: BasicInfoComponenteComponent},
      {path: 'basic-info', loadChildren: () => import('../../basic-info/basic-info.module').then((m) => m.BasicInfoModule) },
      /*
      {path: 'list-age-group', component: BasicInfoAgeGroupListComponent},
      {path: 'list-document-type', component: BasicInfoDocumentTypeListComponent},
      {path: 'list-gender', component: BasicInfoGenderListComponent},
      {path: 'list-relationship-business', component: BasicInfoRelationshipBusinessListComponent},
      {path: 'list-type-of-diner', component: BasicInfoTypeOfDinerListComponent},
      {path: 'list-tradition', component: BasicInfoTraditionListComponent},
      {path: 'list-culture', component: BasicInfoCultureListComponent},
      {path: 'list-religion', component: BasicInfoReligionListComponent},
      */
  ],
},];

@NgModule({
  declarations: [],
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SettingsRoutingModule { }



//
