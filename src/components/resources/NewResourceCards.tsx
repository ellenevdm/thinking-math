import { FC } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import Link from "next/link";
import { Button } from "../ui/Button";

interface NewResourceCardsProps {
  title: string;
  category: string;
  description: string;
  grade: string;
  id: string;
}

const NewResourceCard: FC<NewResourceCardsProps> = ({
  title,
  category,
  description,
  grade,
  id,
}) => {
  return (
    <Card className="flex flex-col justify-between items-center p-">
      <CardHeader className="w-full h-full text-center italic">
        {category}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center items-center gap-4">
        <CardTitle className="font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="font-bold">{grade}</CardFooter>
      <CardAction className="w-full self-center">
        <Button className="w-full">
          <Link href={`/resources/${id}`}>Go to</Link>
        </Button>
      </CardAction>
    </Card>
  );
};

export default NewResourceCard;
