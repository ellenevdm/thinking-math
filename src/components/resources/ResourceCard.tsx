import { FC } from "react";
import { Resource } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Button } from "../ui/Button";
import Link from "next/link";
import { dateFormat } from "@/lib/utils";
import CardResources from "../ui/CardResources";

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
    <CardResources
      id={id}
      title={title}
      category={category}
      categoryId={categoryId}
      grade={grade}
      gradeId={gradeId}
      // phase={phase}
      phaseId={phaseId}
      date={date}
      description={description}
    />
  );
};

export default ResourceCard;
