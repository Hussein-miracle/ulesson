import { NextApiRequest, NextApiResponse } from "next";

import studentsData from "@/data/students.json"
import { IStudent } from "@/lib/types";


const students:IStudent[] = [...studentsData]


export const handler = async (req:NextApiRequest,res:NextApiResponse) => {
  const requestMethod = req.method?.toLowerCase() ;
  if(requestMethod === 'get'){
    return res.status(200).json({message:"delete successfull",status:true,students})
  }

  if(requestMethod === 'post'){
    const {} = req.body;
    



    return res.status(200).json({message:"student added successfully"})
  }


  return res.status(400).json({message:"Bad Request"});
}