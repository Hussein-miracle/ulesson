
type Dob<T = string> = T extends `${string}-${string}-${string}` ? T : never; 

export interface Student{
  id:string | number;
  name:string;
  registrationNumber:string;
  major:string;
  gpa:number;
  dob:Dob;
}