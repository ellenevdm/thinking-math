import Link from "next/link";
import { FC } from "react";

const ResourceListPage: FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-20 justify-center items-center">
      <Link
        href="/categories"
        className="mt-10 p-2 text-md font-bold border-5 "
      >
        Back
      </Link>
      <h1 className="font-extrabold text-9xl">Resource List</h1>
      <div>
        <Link
          className="m-4 border-5 p-4 text-lg font-bold"
          href="/resources/1"
        >
          Resource 1
        </Link>
        <Link
          className="m-4 border-5 p-4 text-lg font-bold"
          href="/resources/2"
        >
          Resource 2
        </Link>
        <Link
          className="m-4 border-5 p-4 text-lg font-bold"
          href="/resources/3"
        >
          Resource 3
        </Link>
      </div>
    </div>
  );
};

export default ResourceListPage;
