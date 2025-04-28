"use client";

import DownloadLinks from "@/components/resources/DownloadComponent";

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

  return (
    <div className="w-1/2 mx-auto">
      <div className="text-center p-5 ">
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
      <div className="flex flex-col justify-center text-center gap-5 p-5">
        <h3 className="text-2xl font-bold"> Activities for this Resource</h3>
        <DownloadLinks
          activities={(resource?.activities || []).map((activity) => ({
            id: activity.actId,
            name: activity.actName,
            link: activity.actLink,
          }))}
        />
      </div>

      <div className="flex flex-col gap-5 p-5 ">
        <div className="p-1 border-top-1 border-gray-200 border-b-1"></div>
        <h2 className="text-3xl font-bold text-center">Resources</h2>

        {resource?.wakeletcode ? (
          <>
            <div
              className="flex justify-center border-4 border-gray-400"
              dangerouslySetInnerHTML={{ __html: resource.wakeletcode }}
            ></div>
            <div className="p-1 border-top-1 border-gray-200 border-b-1"></div>
            {/* <div>
              <CommentSection comments={resource.comments || []} />
            </div> */}
          </>
        ) : (
          <div className="text-center font-bold text-2xl">
            No resources available for this resource
          </div>
        )}
      </div>

      <div className="p-1 border-top-1 border-gray-200 border-t-1"></div>
    </div>
  );
};

export default ResourcePage;
