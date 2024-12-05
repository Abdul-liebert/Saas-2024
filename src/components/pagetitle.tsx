import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

export default function PageTitle({ title, className }: Props) {
  return (
    <h1 className={cn("text-4xl text-gray-800 mb-5 px-4 font-bold", className)}>{title}</h1>
  );
}
