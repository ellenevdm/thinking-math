import { FC } from "react";

import Link from "next/link";
import { dateFormat } from "@/lib/utils";

interface NewResourceCardsProps {
  title: string;
  date: Date;
  description: string;
  grade: string;
  id: string;
}

const NewResourceCard: FC<NewResourceCardsProps> = ({
  title,
  date,
  description,
  grade,
  id,
}) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 rounded-xl shadow-lg border border-gray-100">
      <div className="w-full font-light bg-gray-100 p-0.5 text-center italic rounded-md ">
        {dateFormat(date)}
      </div>
      <div className="flex-grow flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold mt-2">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex my-2 gap-1 w-full flex-wrap ">{grade}</div>
      <div className="font-bold flex flex-col w-full m-2 border-t pt-2 justify-center items-center">
        <Link href={`/resourceList/${id}`} className="w-full">
          <button className="w-full bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive p-2 cursor-pointer ">
            Go to
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewResourceCard;
