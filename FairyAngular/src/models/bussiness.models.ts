export interface BusinessInvoiceData {
    id?: number;
    name?: string;
    document_number?: string;
    description?: string;
    created_date?: string;
    updated_date?: string;
    is_active?: boolean;
    created_user_id?: number;
    updated_user_id?: number;
    table_name?: string; // Business logic association
}

export interface BusinessColor {
    id?: number;
    color_origin?: string;
    name?: string;
    description?: string;
    code_RGB?: string;
    code_hexadecimal?: string;
    code_CMK?: string;
    is_active?: boolean;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}

export interface BusinessInvoiceType {
    id?: number;
    name?: string;
    description?: string;
    is_active?: boolean;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}

export interface BusinessProduct {
    id?: number;
    name?: string;
    description?: string;
    is_active?: boolean;
    id_product_type_id?: number;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}

export interface BusinessProductType {
    id?: number;
    name?: string;
    description?: string;
    is_active?: boolean;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}

export interface BusinessService {
    id?: number;
    name?: string;
    description?: string;
    is_active?: boolean;
    id_service_type_id?: number;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}

export interface BusinessServiceType {
    id?: number;
    name?: string;
    description?: string;
    is_active?: boolean;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}

export interface BusinessTax {
    id?: number;
    name?: string;
    description?: string;
    amount?: number;
    percent?: number;
    time_present?: string;
    id_tax_type_id?: number;
    is_active?: boolean;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}

export interface BusinessTaxType {
    id?: number;
    name?: string;
    siglas?: string;
    description?: string;
    is_active?: boolean;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}

export interface BusinessTaxTypeXCountry {
    id?: number;
    tax_type_id?: number;
    country_id?: number;
    is_active?: boolean;
    created_user_id?: number;
    updated_user_id?: number;
    created_date?: string;
    updated_date?: string;
    table_name?: string; // Business logic association
}
