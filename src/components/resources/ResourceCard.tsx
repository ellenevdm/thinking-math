import { FC } from "react";
import { Resource } from "@/types/resource";
import Link from "next/link";
import { dateFormat } from "@/lib/utils";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
  const {
    id,
    title,
    category,
    categoryId,
    grade,
    gradeId,

    phaseId,
    date,
    description,
  } = resource;

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
        <Link href={`/resourceList/${id}`} className="w-full">
          <button className="w-full  bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive p-2 cursor-pointer">
            Visit Resource
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
