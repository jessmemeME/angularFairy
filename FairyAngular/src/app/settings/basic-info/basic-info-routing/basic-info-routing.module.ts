import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';




//TABLAS DE INFORMACION BASICA (componentes)
import { BasicInfoAgeGroupListComponent } from '../../basic-info/basic-info-age-group/basic-info-age-group-list/basic-info-age-group-list.component';
import { BasicInfoDocumentTypeListComponent } from '../../basic-info/basic-info-document-type/basic-info-document-type-list/basic-info-document-type-list.component';
import { BasicInfoGenderListComponent } from '../../basic-info/basic-info-gender/basic-info-gender-list/basic-info-gender-list.component';
import { BasicInfoRelationshipBusinessListComponent } from '../../basic-info/basic-info-relationship-business/basic-info-relationship-business-list/basic-info-relationship-business-list.component';
import { BasicInfoTypeOfDinerListComponent } from '../../basic-info/basic-info-type-of-diner/basic-info-type-of-diner-list/basic-info-type-of-diner-list.component';
import { BasicInfoTraditionListComponent } from '../../basic-info/basic-info-tradition/basic-info-tradition-list/basic-info-tradition-list.component';
import { BasicInfoCultureListComponent } from '../../basic-info/basic-info-culture/basic-info-culture-list/basic-info-culture-list.component';
import { BasicInfoReligionListComponent } from '../../basic-info/basic-info-religion/basic-info-religion-list/basic-info-religion-list.component';
//Componente principal
import { BasicInfoComponenteComponent } from '../basic-info-componente/basic-info-componente.component';

//

const routes: Routes = [{
  path:'',
  component: BasicInfoComponenteComponent,
  children: [
      //Llamamos a los componentes de cada tabla de Basic Info
      {path: 'list-age-group', component: BasicInfoAgeGroupListComponent},
      {path: 'list-document-type', component: BasicInfoDocumentTypeListComponent},
      {path: 'list-gender', component: BasicInfoGenderListComponent},
      {path: 'list-relationship-business', component: BasicInfoRelationshipBusinessListComponent},
      {path: 'list-type-of-diner', component: BasicInfoTypeOfDinerListComponent},
      {path: 'list-tradition', component: BasicInfoTraditionListComponent},
      {path: 'list-culture', component: BasicInfoCultureListComponent},
      {path: 'list-religion', component: BasicInfoReligionListComponent},
  ],
},];

@NgModule({
  declarations: [],
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class BasicInfoRoutingModule { }