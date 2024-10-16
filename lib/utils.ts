import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast as sToast } from "sonner";
import { LINK_EMBED_REGEX } from "./constants";



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const replaceHyphenWithSpace = (str: string) => {
  return str.replace(/-/g, " ");
};

export function generateRandomNumber(min:number,max:number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const successToast = (msg: string) => {
  sToast.success(msg);
};

export const errorToast = (msg: string) => {
  sToast.error(msg);
};

export const infoToast = (msg: string) => {
  sToast.info(msg);
};

export const warnToast = (msg: string) => {
  sToast.warning(msg);
};


export const validatePayload = (payload:object) => {
  // Retrieve all the values coming from the request
  const values = Object.values(payload);
  const valuesString = values.join(' ');
  console.log({ valuesString });
  // check if any of the values has a link embeded
  if (valuesString.match(LINK_EMBED_REGEX)) {
    console.log('Unauthorize access');
    return false;
  } else {
    console.log('you can proceed');
    return true;
  }
};

/**
 * A function to sleep for a given time (milliseconds)
 *
 * @param {number} ms - The time to sleep in milliseconds
 * @returns {void}
 */
export const sleep = async (ms:number):Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}