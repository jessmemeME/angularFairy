export interface Providers {
    id: string;
    type: string;
    name: string;
    isMyCompany: boolean;
    description?: string;
    isConfirmated: boolean;
    createdDate: Date;
    updatedDate?: Date;
    isActive: string;
  
    // Foreign keys
    companyId?: number;
    companyName?: string;
    createdUserId: number;
    peopleId?: number;
    peopleName?: string;
    updatedUserId?: number;
    typePeople: string;
  }
  