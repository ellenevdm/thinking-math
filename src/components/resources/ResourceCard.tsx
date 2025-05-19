import { FC } from "react";
import { Resource } from "@/types/resource";
import Link from "next/link";
import { dateFormat } from "@/lib/utils";
import Button from "../ui/Button";
import { useAuth } from "@/context/AuthContext";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
  const { isAuthMode } = useAuth();
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
          <Button variant="primary" className="w-full">
            Go To Resource
          </Button>
        </Link>
        {isAuthMode && (
          <div className="flex gap-1">
            {" "}
            <Button variant="secondary" className="w-full mt-2">
              Edit
            </Button>
            <Button className="w-full mt-2 text-red-800 bg-red-200">
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
