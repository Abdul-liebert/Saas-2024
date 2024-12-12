import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};
export function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="flex justify-between">
        <p className="text-sm">{props.label}</p>
        <props.icon className="h-6 w-6 text-gray-500"></props.icon>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-4xl font-bold">{props.amount}</h2>
        <p className="text-sm text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        "min-h-[100px] flex-grow", // Tambahkan min-h dan flex-grow
        props.className
      )}
    />
  );
}
