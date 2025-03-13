import Link from "next/link";

export default function Resource() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Link href="/resources" className="m-10 p-2 text-md font-bold border-5 ">
        Back
      </Link>
      <h1 className="font-extrabold text-9xl">Resource Item</h1>
    </div>
  );
}
