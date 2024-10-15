import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const replaceHyphenWithSpace = (str: string) => {
  return str.replace(/-/g, " ");
};

export function generateRandomNumber(min:number,max:number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}