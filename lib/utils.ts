import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast as sToast } from "sonner";



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
