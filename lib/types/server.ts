

export interface IStudent{
  id:string;
  name:string;
  registrationNumber:string;
  major:string;
  gpa:number;
  dob:string;
}

export type ResponseData<T = unknown> = {
  message?: string;
  status?:boolean;
  data?:T;
}
