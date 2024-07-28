


export interface Clients
{
	id?:number;
    type?:string;
	name?:string;
	description?:string;
    is_confirmated?:boolean;
	created_date?:string;
	updated_date?:string;
	is_active?:boolean;
	created_user_id?:number;
    people_id?:number;
	updated_user_id?:number;

	/*
	 TABLE_NAME = 'clients_client'
	 */
}

/*
"id"	"bigint"
"type"	"character varying"
"name"	"character varying"
"description"	"text"
"is_confirmated"	"boolean"
"created_date"	"timestamp with time zone"
"updated_date"	"timestamp with time zone"
"is_active"	"boolean"
"created_user_id"	"bigint"
"people_id"	"bigint"
"updated_user_id"	"bigint"
*/