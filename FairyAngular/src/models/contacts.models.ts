import exp from "constants";

/*public class Contacts
{
	public long id { get; set; }
    [Required] public string? name { get; set; }
    [Required] public string? contact_data { get; set; }
    [Required] public string? verificated_token { get; set; }
    [Required] public bool is_verified { get; set; }
    [Required] public bool is_main_contact { get; set; }
    public string? description { get; set; }
    [Required] public DateTime created_date { get; set; }
    [Required] public DateTime updated_date { get; set; }
    [Required] public bool is_active { get; set; }
    [Required] public string? table_name { get; set; }
    [Required] public long contact_type_id { get; set; }
    [Required] public long created_user_id { get; set; }
    [Required] public long updated_user_id { get; set; }
}*/
export interface Contacts {
    id?: number; // ID del contacto
    name?: string; // Nombre del contacto
    contact_data?: string; // Datos de contacto
    verificated_token?: string; // Token de verificación
    is_verified?: boolean; // Indica si el contacto está verificado
    is_main_contact?: boolean; // Indica si el contacto es principal
    description?: string; // Descripción del contacto
    created_date?: string; // Fecha de creación
    updated_date?: string; // Fecha de última actualización
    is_active?: boolean; // Indica si el contacto está activo
    table_name?: string; // Nombre de la tabla
    contact_type_id?: number; // ID del tipo de contacto
    created_user_id?: number; // ID del usuario que creó el contacto
    updated_user_id?: number; // ID del usuario que actualizó el contacto
}; 