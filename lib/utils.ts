import { clsx, type ClassValue } from "clsx"
import { a } from "motion/react-client";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

