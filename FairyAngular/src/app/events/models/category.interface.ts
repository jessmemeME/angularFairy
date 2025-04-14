export interface Style {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdDate: string;
    updatedDate: string;
  }
  
  export interface Segment {
    id: number;
    name: string;
    description: string | null;
    isActive: boolean;
    createdDate: string;
    updatedDate: string;
    styles: Style[];
  }
  
  export interface Category {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdDate: string;
    updatedDate: string;
    segments: Segment[];
  }
  