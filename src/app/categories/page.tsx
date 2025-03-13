import Link from "next/link";
import { FC } from "react";

interface AboutPageProps {}

const CategoriesPage: FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-20 justify-center items-center">
      <h1 className="font-extrabold text-9xl">Categories</h1>
      <Link href="/resources" className="border-5 p-4 text-lg font-bold">
        Resources
      </Link>
    </div>
  );
};

export default CategoriesPage;
