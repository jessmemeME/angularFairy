//Aqui definimos los campos del modelo (referentes a la base de datos)

//ESTA SECCION ES DE TODO LO REFERENTE A CUENTAS DE USUARIOS
//tabla accounts_user

export interface BasicInfo {
}

export interface AgeGroup
{
	id?:number;
	name?:string;
	description?:string;
	age_range?:string;
	is_active?:boolean;
	created_date?:string;
	updated_date?:string;
	created_user_id?:number;
	updated_user_id?:number;

	/*
	 TABLE_NAME = 'basic_info_age_group'
	 */
}


export interface DocumentType
{
	id?:number;
	name?:string;
	description?:string;
	is_active?:boolean;
	created_date?:string;
	updated_date?:string;
	created_user_id?:number;
	updated_user_id?:number;
	/*
		TABLE_NAME = 'basic_info_document_type'
	 */

}

export interface Gender
{
  id?:number;
  name?:string;
  description?:string;
  is_active?:boolean;
  created_date?:string;
  updated_date?:string;
  created_user_id?:number;
  updated_user_id?:number;
  /*
  TABLE_NAME = 'basic_info_gender'
   */

}


export interface RelationshipBusiness
{
  id?:number;
  name?:string;
  description?:string;
  is_active?:boolean;
  created_date?:string;
  updated_date?:string;
  created_user_id?:number;
  updated_user_id?:number;

  /*
  TABLE_NAME = 'basic_info_relationship_business'
   */

}
export interface TypeOfDiner
{
  id?:number;
  name?:string;
  description?:string;
  is_active?:boolean;
  created_date?:string;
  updated_date?:string;
  created_user_id?:number;
  updated_user_id?:number;
  /*
  TABLE_NAME = 'basic_info_type_of_diner'
 */
}

export interface Tradition
{
  id?:number;
  name?:string;
  description?:string;
  requisitos?:string;
  reglas?:string;
  is_active?:boolean;
  created_date?:string;
  updated_date?:string;
  created_user_id?:number;
  updated_user_id?:number;
  /*
  TABLE_NAME = 'basic_info_tradition'
   */
}

export interface Culture
{
  id?:number;
  name?:string;
  description?:string;
  is_active?:boolean;
  created_date?:string;
  updated_date?:string;
  created_user_id?:number;
  updated_user_id?:number;
  /*
  TABLE_NAME = 'basic_info_culture'
   */
}
export interface Religion
{
  id?:number;
  name?:string;
  description?:string;
  is_active?:boolean;
  created_date?:string;
  updated_date?:string;
  created_user_id?:number;
  updated_user_id?:number;
  /*
  TABLE_NAME = 'basic_info_religion'
   */

}
