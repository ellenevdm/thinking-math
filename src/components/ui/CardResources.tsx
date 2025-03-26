// import { Resource } from "@/types/types";
import { FC } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { dateFormat } from "@/lib/utils";
// import { dateFormat } from "@/utils/dateFormat";

interface Resource {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  grade: string;
  gradeId: string;
  phase?: string; // Added phase property
  phaseId: string;
  date: Date;
  description: string;
}

interface CardResourcesProps {
  resource: Resource;
}

const CardResources: FC<Resource> = ({
  id,
  title,
  category,
  categoryId,
  grade,
  gradeId,
  phase, // Added phase property
  phaseId,
  date,
  description,
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col justify-center items-center p-4 rounded-xl shadow-lg border border-gray-100`}
    >
      <div className="w-full font-light bg-gray-100 p-0.5 text-center italic rounded-md">
        {dateFormat(date)}
      </div>
      <div className="h-full flex flex-col items-center gap-4">
        <h2 className="font-bold mt-2">{title}</h2>
        <span>{description}</span>
      </div>
      <div className="flex my-2 gap-1 w-full flex-wrap ">
        <span
          id={gradeId}
          className="font-light text-xs border px-0.5 py-0.5 rounded"
        >
          {grade}
        </span>
        <span
          id={phaseId}
          className="font-light text-xs border px-0.5 py-0.5 rounded"
        >
          {phaseId} {/* Display phase */}
        </span>
        <span
          id={categoryId}
          className="font-light text-xs border px-0.5 py-0.5 rounded"
        >
          {category}
        </span>
      </div>
      <div className="font-bold flex flex-col w-full m-2 border-t pt-2">
        <Link href={`/resources/${id}`} className="w-full">
          <button className="w-full  bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive p-2 cursor-pointer">
            Visit Resource
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardResources;
