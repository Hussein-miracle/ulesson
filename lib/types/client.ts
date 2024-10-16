import { z } from "zod";
import { add_student_schema, edit_student_schema } from "../validations";

type Dob<T = string> = T extends `${string}-${string}-${string}` ? T : never; 

export interface Student{
  id:string | number;
  name:string;
  registrationNumber:string;
  major:string;
  gpa:number;
  dob:Dob;
}


export type AddStudent = z.infer<typeof add_student_schema>;
export type EditStudent = z.infer<typeof edit_student_schema>;
export type ApiResponse<T = unknown> = {
  data?:T;
  message?:string;
  status?:boolean;
}