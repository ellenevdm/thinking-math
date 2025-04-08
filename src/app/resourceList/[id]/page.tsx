"use client";

import CommentSection from "@/components/resources/CommentSection";
import { dummyComments } from "@/data/dummyComments";
import { resourceCards } from "@/data/dummyResources";

import { useParams } from "next/navigation";
import React, { FC } from "react";

const ResourcePage: FC = () => {
  const { id } = useParams();
  const resource = resourceCards.find((resource) => resource.id === String(id));

  if (!resource) {
    return (
      <div className="text-4xl font-extrabold">
        Resource not found, please try again later
      </div>
    );
  }
  function downloadActivity(activity: string) {
    console.log(`${activity} Downloaded`);
  }

  return (
    <div className="w-1/2 mx-auto">
      <div className="text-center  border-b-1 border-gray-200 p-5 ">
        {" "}
        <h1 className="text-5xl font-bold mb-5">{resource?.title}</h1>
        <div className="flex justify-between mb-5 border-b-1 border-gray-200 border-t-1 p-2">
          <p className="font-semibold">Category: {resource?.category}</p>
          <p className="font-semibold">Grade: {resource?.grade}</p>
          <p className="font-semibold">Phase: {resource?.phase}</p>
        </div>
        <p>{resource?.description}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-1 border-top-1 border-gray-200 border-b-1"></div>
      <div className="flex flex-col justify-center text-center gap-5 p-5 border-top-1 border-gray-200 border-b-1 mt-5">
        <h3 className="text-2xl font-bold"> Activities for this Resource</h3>
        <div>
          <li className="list-none flex  gap-2 justify-center">
            <p className="font-semibold">Teachers Activity:</p>{" "}
            <a
              className="underline cursor-pointer hover:text-gray-600"
              onClick={() => downloadActivity("Teachers Activity")}
            >
              Download {resource?.title} activity for {resource?.grade} teachers{" "}
            </a>
          </li>
          <li className="list-none flex gap-2 justify-center">
            <p className="font-semibold">Students Activity:</p>

            <a
              className="underline cursor-pointer hover:text-gray-600"
              onClick={() => downloadActivity("Students Activity")}
            >
              Download {resource?.title} activity for {resource?.grade} students{" "}
            </a>
          </li>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-1 border-top-1 border-gray-200 border-b-1"></div>
      <div className="flex flex-col gap-5 p-5 border-top-1 border-gray-200 border-b-1">
        <h2 className="text-3xl font-bold text-center">Resources</h2>

        {resource?.wakeletcode && (
          <div
            className="flex justify-center border-4 border-gray-400"
            dangerouslySetInnerHTML={{ __html: resource.wakeletcode }}
          ></div>
        )}
      </div>
      <div>
        <CommentSection comments={dummyComments} />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-1 border-top-1 border-gray-200 border-b-1"></div>
    </div>
  );
};

export default ResourcePage;
