export interface ExpectationIdea {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdDate: string; // ISO 8601 timestamp
    updatedDate: string;
  }
  
  export interface ExpectationCategory {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdDate: string;
    updatedDate: string;
    expectationIdeas: ExpectationIdea[];
  }
  
  export interface ExpectationClassification {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdDate: string;
    updatedDate: string;
    expectationCategories: ExpectationCategory[];
  }
  