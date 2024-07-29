import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//Importamos el componente
import { BasicInfoComponenteComponent } from './basic-info-componente/basic-info-componente.component';
//AgeGroup
import { BasicInfoAgeGroupInsertComponent } from './basic-info-people/basic-info-age-group/basic-info-age-group-insert/basic-info-age-group-insert.component';
import { BasicInfoAgeGroupListComponent } from './basic-info-people/basic-info-age-group/basic-info-age-group-list/basic-info-age-group-list.component';
import { BasicInfoAgeGroupUpdateComponent } from './basic-info-people/basic-info-age-group/basic-info-age-group-update/basic-info-age-group-update.component';
//Cultere
import { BasicInfoCultureInsertComponent } from './basic-info-event/basic-info-culture/basic-info-culture-insert/basic-info-culture-insert.component';
import { BasicInfoCultureListComponent } from './basic-info-event/basic-info-culture/basic-info-culture-list/basic-info-culture-list.component';
import { BasicInfoCultureUpdateComponent } from './basic-info-event/basic-info-culture/basic-info-culture-update/basic-info-culture-update.component';
//Religion
import { BasicInfoReligionInsertComponent } from './basic-info-event/basic-info-religion/basic-info-religion-insert/basic-info-religion-insert.component';
import { BasicInfoReligionListComponent } from './basic-info-event/basic-info-religion/basic-info-religion-list/basic-info-religion-list.component';
import { BasicInfoReligionUpdateComponent } from './basic-info-event/basic-info-religion/basic-info-religion-update/basic-info-religion-update.component';
//DocumentType
import { BasicInfoDocumentTypeInsertComponent } from './basic-info-people/basic-info-document-type/basic-info-document-type-insert/basic-info-document-type-insert.component';
import { BasicInfoDocumentTypeListComponent } from './basic-info-people/basic-info-document-type/basic-info-document-type-list/basic-info-document-type-list.component';
import { BasicInfoDocumentTypeUpdateComponent } from './basic-info-people/basic-info-document-type/basic-info-document-type-update/basic-info-document-type-update.component';
//Gender
import { BasicInfoGenderInsertComponent } from './basic-info-people/basic-info-gender/basic-info-gender-insert/basic-info-gender-insert.component';
import { BasicInfoGenderListComponent } from './basic-info-people/basic-info-gender/basic-info-gender-list/basic-info-gender-list.component';
import { BasicInfoGenderUpdateComponent } from './basic-info-people/basic-info-gender/basic-info-gender-update/basic-info-gender-update.component';
//RelationshipBusiness
import { BasicInfoRelationshipBusinessInsertComponent } from './basic-info-company/basic-info-relationship-business/basic-info-relationship-business-insert/basic-info-relationship-business-insert.component';
import { BasicInfoRelationshipBusinessListComponent } from './basic-info-company/basic-info-relationship-business/basic-info-relationship-business-list/basic-info-relationship-business-list.component';
import { BasicInfoRelationshipBusinessUpdateComponent } from './basic-info-company/basic-info-relationship-business/basic-info-relationship-business-update/basic-info-relationship-business-update.component';
//TypeOfDiner
import { BasicInfoTypeOfDinerInsertComponent } from './basic-info-people/basic-info-type-of-diner/basic-info-type-of-diner-insert/basic-info-type-of-diner-insert.component';
import { BasicInfoTypeOfDinerListComponent } from './basic-info-people/basic-info-type-of-diner/basic-info-type-of-diner-list/basic-info-type-of-diner-list.component';
import { BasicInfoTypeOfDinerUpdateComponent } from './basic-info-people/basic-info-type-of-diner/basic-info-type-of-diner-update/basic-info-type-of-diner-update.component';
//TraditionList
import { BasicInfoTraditionInsertComponent } from './basic-info-event/basic-info-tradition/basic-info-tradition-insert/basic-info-tradition-insert.component';
import { BasicInfoTraditionListComponent } from './basic-info-event/basic-info-tradition/basic-info-tradition-list/basic-info-tradition-list.component';
import { BasicInfoTraditionUpdateComponent } from './basic-info-event/basic-info-tradition/basic-info-tradition-update/basic-info-tradition-update.component';
//Importamos al modulo de ruteo
import { BasicInfoRoutingModule } from './basic-info-routing/basic-info-routing.module';


@NgModule({
  declarations: [
    BasicInfoComponenteComponent,
    //AgeGroup
    BasicInfoAgeGroupInsertComponent,
    BasicInfoAgeGroupListComponent,
    BasicInfoAgeGroupUpdateComponent,
    //DocumentType
    BasicInfoDocumentTypeInsertComponent,
    BasicInfoDocumentTypeListComponent,
    BasicInfoDocumentTypeUpdateComponent,
    //Gender
    BasicInfoGenderInsertComponent,
    BasicInfoGenderListComponent,
    BasicInfoGenderUpdateComponent,
    //RelationshipBusiness
    BasicInfoRelationshipBusinessInsertComponent,
    BasicInfoRelationshipBusinessListComponent,
    BasicInfoRelationshipBusinessUpdateComponent,
    //Type of diner
    BasicInfoTypeOfDinerInsertComponent,
    BasicInfoTypeOfDinerListComponent,
    BasicInfoTypeOfDinerUpdateComponent,
    //Tradition
    BasicInfoTraditionInsertComponent,
    BasicInfoTraditionListComponent,
    BasicInfoTraditionUpdateComponent,
    //Culture
    BasicInfoCultureInsertComponent,
    BasicInfoCultureListComponent,
    BasicInfoCultureUpdateComponent,
    //Religion
    BasicInfoReligionInsertComponent,
    BasicInfoReligionListComponent,
    BasicInfoReligionUpdateComponent,
  ],
  imports: [
    CommonModule,BasicInfoRoutingModule,FormsModule,RouterModule
    
  ]
})
export class BasicInfoModule { }



/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponenteComponent } from './basic-info-componente/basic-info-componente.component';
import { BasicInfoRoutingModule } from './basic-info-routing/basic-info-routing.module';
import { RolesComponent } from '../empresa/roles/roles.component';
import { PermisosComponent } from '../empresa/permisos/permisos.component';
import { TiposRelacionesComponent } from '../empresa/tipos-relaciones/tipos-relaciones.component';
import { CategoriasEdadComponent } from '../personas/categorias-edad/categorias-edad.component';
import { TipoComensalComponent } from '../personas/tipo-comensal/tipo-comensal.component';
import { TiposDocumentosComponent } from '../personas/tipos-documentos/tipos-documentos.component';
import { GeneroComponent } from '../personas/genero/genero.component';
import { TradicionesComponent } from '../eventos/tradiciones/tradiciones.component';
import { CulturasComponent } from '../eventos/culturas/culturas.component';
import { ReligionesComponent } from '../eventos/religiones/religiones.component';
import { TareasComponent } from '../eventos/tareas/tareas.component';

@NgModule({
  declarations: [
    BasicInfoComponenteComponent,
    RolesComponent,
    PermisosComponent,
    TiposRelacionesComponent,
    CategoriasEdadComponent,
    TipoComensalComponent,
    TiposDocumentosComponent,
    GeneroComponent,
    TradicionesComponent,
    CulturasComponent,
    ReligionesComponent,
    TareasComponent
  ],
  imports: [
    CommonModule,
    BasicInfoRoutingModule
  ]
})
export class BasicInfoModule { }

*/
