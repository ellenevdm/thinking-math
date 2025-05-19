"use client";

import CommentSection from "@/components/resources/CommentSection";
import DownloadLinks from "@/components/resources/DownloadComponent";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

import { resourceCards } from "@/data/dummyResources";
import { Input } from "@headlessui/react";

import { useParams } from "next/navigation";
import React, { FC, useState } from "react";

const ResourcePage: FC = () => {
  const [editDescription, setEditDescription] = useState(false);

  const { isAuthMode } = useAuth();

  const { id } = useParams();
  const resource = resourceCards.find((resource) => resource.id === String(id));

  function handleEditDescription() {
    setEditDescription((prev) => !prev);
  }

  if (!resource) {
    return (
      <div className="text-2xl sm:text-4xl font-extrabold text-center p-5">
        Resource not found, please try again later
      </div>
    );
  }

  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto p-4 sm:p-6">
      <div className="text-center p-4 sm:p-5">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-5">
          {resource?.title}
        </h1>
        <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-5 border-b border-gray-200 border-t p-2">
          <p className="font-semibold text-sm sm:text-base">
            Category: {resource?.category}
          </p>
          <p className="font-semibold text-sm sm:text-base">
            Grade: {resource?.grade}
          </p>
          <p className="font-semibold text-sm sm:text-base">
            Phase: {resource?.phase}
          </p>
        </div>
        <p className="text-sm sm:text-base">{resource?.description}</p>
        {isAuthMode && (
          <Button onClick={handleEditDescription}>
            {!editDescription ? "Edit" : "Save"}
          </Button>
        )}
        {isAuthMode && editDescription && (
          <div>
            <Input
              type="text"
              defaultValue={resource.description}
              className="border border-gray-300 rounded-md p-2 mt-2 w-full"
              placeholder="Edit description"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 p-2 border-t border-b border-gray-200"></div>

      <div className="flex flex-col justify-center text-center gap-4 sm:gap-5 p-4 sm:p-5">
        <h3 className="text-xl sm:text-2xl font-bold">
          Activities for this Resource
        </h3>
        <DownloadLinks
          activities={(resource?.activities || []).map((activity) => ({
            id: activity.actId,
            name: activity.actName,
            link: activity.actLink,
          }))}
        />
        {isAuthMode && (
          <div>
            <Button>Add Activity</Button>{" "}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-5">
        <div className="p-1 border-t border-b border-gray-200"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Resources
        </h2>

        {resource?.wakeletcode ? (
          <>
            <div
              className="flex justify-center border-2 sm:border-4 border-gray-400"
              dangerouslySetInnerHTML={{ __html: resource.wakeletcode }}
            ></div>
            <div className="p-1 border-t border-b border-gray-200"></div>
          </>
        ) : (
          <div className="text-center font-bold text-xl sm:text-2xl">
            No resources available for this resource
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <CommentSection comments={resource.comments || []} />
      </div>

      <div className="p-1 border-t border-gray-200"></div>
    </div>
  );
};

export default ResourcePage;
