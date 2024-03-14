import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

//Componente principal
import { BasicInfoComponenteComponent } from '../basic-info-componente/basic-info-componente.component';



//TABLAS DE INFORMACION BASICA (componentes)
//Listas
import { BasicInfoAgeGroupListComponent } from '../../basic-info/basic-info-age-group/basic-info-age-group-list/basic-info-age-group-list.component';
import { BasicInfoDocumentTypeListComponent } from '../../basic-info/basic-info-document-type/basic-info-document-type-list/basic-info-document-type-list.component';
import { BasicInfoGenderListComponent } from '../../basic-info/basic-info-gender/basic-info-gender-list/basic-info-gender-list.component';
import { BasicInfoRelationshipBusinessListComponent } from '../../basic-info/basic-info-relationship-business/basic-info-relationship-business-list/basic-info-relationship-business-list.component';
import { BasicInfoTypeOfDinerListComponent } from '../../basic-info/basic-info-type-of-diner/basic-info-type-of-diner-list/basic-info-type-of-diner-list.component';
import { BasicInfoTraditionListComponent } from '../../basic-info/basic-info-tradition/basic-info-tradition-list/basic-info-tradition-list.component';
import { BasicInfoCultureListComponent } from '../../basic-info/basic-info-culture/basic-info-culture-list/basic-info-culture-list.component';
import { BasicInfoReligionListComponent } from '../../basic-info/basic-info-religion/basic-info-religion-list/basic-info-religion-list.component';
//Update
import { BasicInfoAgeGroupUpdateComponent } from '../basic-info-age-group/basic-info-age-group-update/basic-info-age-group-update.component';
import { BasicInfoDocumentTypeUpdateComponent } from '../basic-info-document-type/basic-info-document-type-update/basic-info-document-type-update.component';
import { BasicInfoGenderUpdateComponent } from '../basic-info-gender/basic-info-gender-update/basic-info-gender-update.component';
import { BasicInfoRelationshipBusinessUpdateComponent } from '../basic-info-relationship-business/basic-info-relationship-business-update/basic-info-relationship-business-update.component';
import { BasicInfoTypeOfDinerUpdateComponent } from '../basic-info-type-of-diner/basic-info-type-of-diner-update/basic-info-type-of-diner-update.component';
import { BasicInfoTraditionUpdateComponent } from '../basic-info-tradition/basic-info-tradition-update/basic-info-tradition-update.component';
import { BasicInfoCultureUpdateComponent } from '../basic-info-culture/basic-info-culture-update/basic-info-culture-update.component';
import { BasicInfoReligionUpdateComponent } from '../basic-info-religion/basic-info-religion-update/basic-info-religion-update.component';
//Insert
import { BasicInfoAgeGroupInsertComponent } from '../basic-info-age-group/basic-info-age-group-insert/basic-info-age-group-insert.component';
import { BasicInfoDocumentTypeInsertComponent } from '../basic-info-document-type/basic-info-document-type-insert/basic-info-document-type-insert.component';
import { BasicInfoGenderInsertComponent } from '../basic-info-gender/basic-info-gender-insert/basic-info-gender-insert.component';
import { BasicInfoRelationshipBusinessInsertComponent } from '../basic-info-relationship-business/basic-info-relationship-business-insert/basic-info-relationship-business-insert.component';
import { BasicInfoTypeOfDinerInsertComponent } from '../basic-info-type-of-diner/basic-info-type-of-diner-insert/basic-info-type-of-diner-insert.component';
import { BasicInfoTraditionInsertComponent } from '../basic-info-tradition/basic-info-tradition-insert/basic-info-tradition-insert.component';
import { BasicInfoCultureInsertComponent } from '../basic-info-culture/basic-info-culture-insert/basic-info-culture-insert.component';
import { BasicInfoReligionInsertComponent } from '../basic-info-religion/basic-info-religion-insert/basic-info-religion-insert.component';

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
      //Update
      {path: 'update-age-group', component: BasicInfoAgeGroupUpdateComponent},
      {path: 'update-document-type', component: BasicInfoDocumentTypeUpdateComponent},
      {path: 'update-gender', component: BasicInfoGenderUpdateComponent},
      {path: 'update-relationship-business', component: BasicInfoRelationshipBusinessUpdateComponent},
      {path: 'update-type-of-diner', component: BasicInfoTypeOfDinerUpdateComponent},
      {path: 'update-tradition', component: BasicInfoTraditionUpdateComponent},
      {path: 'update-culture', component: BasicInfoCultureUpdateComponent},
      {path: 'update-religion', component: BasicInfoReligionUpdateComponent},

      //Insert
      {path: 'insert-age-group', component: BasicInfoAgeGroupInsertComponent},
      {path: 'insert-document-type', component: BasicInfoDocumentTypeInsertComponent},
      {path: 'insert-gender', component: BasicInfoGenderInsertComponent},
      {path: 'insert-relationship-business', component: BasicInfoRelationshipBusinessInsertComponent},
      {path: 'insert-type-of-diner', component: BasicInfoTypeOfDinerInsertComponent},
      {path: 'insert-tradition', component: BasicInfoTraditionInsertComponent},
      {path: 'insert-culture', component: BasicInfoCultureInsertComponent},
      {path: 'insert-religion', component: BasicInfoReligionInsertComponent},
  ],
},];

@NgModule({
  declarations: [],
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class BasicInfoRoutingModule { }