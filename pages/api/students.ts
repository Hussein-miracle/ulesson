import type { NextApiRequest, NextApiResponse } from "next";
import type { IStudent, ResponseData } from "@/lib/types";

import studentsData from "@/data/students.json"
import { validatePayload } from "@/lib/utils";


export let students:IStudent[] = [...studentsData]


const handler = async (req:NextApiRequest,res:NextApiResponse<ResponseData>) => {
  const requestMethod = req.method?.toLowerCase() ;
  const query = req.query;
  const studentId =  query?.studentId;
  
  // console.log({query},"query out")
  
  if(requestMethod === 'get'){
    console.log({studentId});
    if(studentId){
      const student = students.find((st) => st.id === studentId);
      if(student){
        return res.status(200).json({status:true,data:student,message:"Student fetched successfully"});
      }else{
        return res.status(401).json({status:true,message:"Student doesn't exist"});
      }
    }

    return res.status(200).json({status:true,data:students})
  }

  if(requestMethod === 'post'){
    const body = req.body as Exclude<IStudent,'id'>;
    // check for url injections
    const isValidPayload = validatePayload(body);
  
   // console.log({body},"add req body")

    if(isValidPayload){
      if(!body?.name){
        return res.status(400).json({message:"Name field is required",status:false});
      }

      if(!body?.dob){
        return res.status(400).json({message:"Date of birth field is required",status:false});
      }

      if(!body?.registrationNumber){
        return res.status(400).json({message:"Registration number field is required",status:false});
      }

      if(!body?.major){
        return res.status(400).json({message:"Major field is required",status:false});
      }

      const student = {
        ...body,
        id: (students.length + 1).toString(),
      };

      students.push(student);
      return res.status(200).json({message:"student added successfully",data:body,status:true})
    }else{
      return res.status(400).json({message:"Access Blocked",status:false});
    }

  }

  if(requestMethod === 'delete'){
    if(studentId){
      const student = students.find((st) => st.id === studentId);
      if(student){
        const newStudents = students.filter((st) => st.id !== studentId);
        students = [...newStudents];
        return res.status(200).json({status:true,message:"Student deleted successfully"});
      }else{
        return res.status(401).json({status:true,message:"Student doesn't exist"});
      }
    }

    return res.status(400).json({message:"Bad request",status:false})
  }

  if(requestMethod === 'patch'){
    const body = req.body as IStudent;
    // check for url injections
    const isValidPayload = validatePayload(body);

    if(isValidPayload){
      if(studentId){
        const studentIndex = students.findIndex((st) => st.id === studentId);
        if(studentIndex > -1){
          const studentAtIndex = students[studentIndex];
          const newData = {
            ...studentAtIndex,
            ...body
          }

          students[studentIndex] = {...newData};
          return res.status(200).json({message:"student edit successful",status:true,data:newData});
        }else{
          return res.status(401).json({status:true,message:"Student doesn't exist"});
        }
      }
    }

    return res.status(400).json({message:"Bad request",status:false})
  }

  return res.status(400).json({message:"Bad Request"});
}

export default handler;