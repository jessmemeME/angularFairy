export interface AuthGroup {
    id: number;
  name: string;
}

export interface AuthGRoupResult {
    result:AuthGroup[],
    id:number;
    exception:string;
    status:number;
    isCanceled:boolean;
    isCompleted:boolean;
    isCompletedSuccessfully:boolean;
    creationOptions:number;
    asyncState:string;
    isFaulted:boolean;
}