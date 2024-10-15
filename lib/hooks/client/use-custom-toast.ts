import { useToast, UseToastOptions } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast  = useToast();


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const successToast = (title: string,description: string,otherOptions:Exclude<UseToastOptions,'status' | 'title' | 'description'> = {}) => {
    toast({
      title,
      description,
      status:"success",
      ...otherOptions
    })
  }
  const errorToast = (title: string,description: string,otherOptions:Exclude<UseToastOptions,'status' | 'title' | 'description'> = {}) => {
    toast({
      title,
      description,
      status:"error",
      ...otherOptions
    })
  }
  const warnToast = (title: string,description: string,otherOptions:Exclude<UseToastOptions,'status' | 'title' | 'description'> = {}) => {
    toast({
      title,
      description,
      status:"warning",
      ...otherOptions
    })
  }
  const infoToast = (title: string,description: string,otherOptions:Exclude<UseToastOptions,'status' | 'title' | 'description'> = {}) => {
    toast({
      title,
      description,
      status:"info",
      ...otherOptions
    })
  }



  return {
    successToast,
    warnToast,
    errorToast,
    infoToast
  }
}

export default useCustomToast;