import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getRandomDate() {
  const start = new Date(2024, 0, 1).getTime();
  const end = new Date().getTime();
  const randomTime = start + Math.random() * (end - start);
  return new Date(randomTime);
}

export function dateFormat(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
