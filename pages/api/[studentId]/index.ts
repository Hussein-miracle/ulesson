import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req:NextApiRequest,res:NextApiResponse) => {
  const requestMethod = req.method?.toLowerCase() ;
  if(requestMethod === 'delete'){
    return res.status(200).json({message:"delete successfull"})
  }
  if(requestMethod === 'patch'){
    return res.status(200).json({message:"patch successfull"})
  }


  return res.status(400).json({message:"Bad Request"});
}