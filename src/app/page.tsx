import NewResourceCard from "@/components/resources/NewResourceCards";
import ResourceCard from "@/components/resources/NewResourceCards";
import { resourceCards } from "@/data/dummyResources";

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-between items-center pb-20">
      <h1 className="font-extrabold text-9xl">Home Page</h1>
      <div className="flex justify-center items-center  w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
          {resourceCards.slice(0, 4).map((card) => (
            <div key={card.id} className="flex justify-center items-center">
              <div className="w-full h-full grid grid-cols-1 gap-4">
                <NewResourceCard {...card} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
