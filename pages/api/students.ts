import type { NextApiRequest, NextApiResponse } from "next";
import type { IStudent, ResponseData } from "@/lib/types";

import studentsData from "@/data/students.json"


const students:IStudent[] = [...studentsData]


const handler = async (req:NextApiRequest,res:NextApiResponse<ResponseData>) => {
  const requestMethod = req.method?.toLowerCase() ;

  if(requestMethod === 'get'){
    return res.status(200).json({status:true,data:students})
  }

  if(requestMethod === 'post'){
    const body = req.body;
  
    console.log({body},"add req body")


    return res.status(200).json({message:"student added successfully"})
  }


  return res.status(400).json({message:"Bad Request"});
}

export default handler;