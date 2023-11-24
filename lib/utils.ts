import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Profile } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

