"use client";

import CommentSection from "@/components/resources/CommentSection";
import DownloadLinks from "@/components/resources/DownloadComponent";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/select";
import { useAuth } from "@/context/AuthContext";
import { gradeCards } from "@/data/dummyGrades";
import { phaseCards } from "@/data/dummyPhases";

// import { resourceCards } from "@/data/dummyResources";
import { useResourceStore } from "@/store/resourceStore";
import { Resource } from "@/types/resource";
import { Input } from "@headlessui/react";

import { useParams } from "next/navigation";
import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { set } from "zod";

const ResourcePage: FC = () => {
  const { isAuthMode } = useAuth();
  const { id } = useParams();
  const resources = useResourceStore((state) => state.resources);
  const setResources = useResourceStore((state) => state.resources);
  const deleteResource = useResourceStore((state) => state.deleteResource);
  const resource = resources.find((r) => r.id === String(id));
  const [localComments, setLocalComments] = useState(resource?.comments || []);
  const [editMode, setEditMode] = useState(false);
  const [editedResource, setEditedResource] = useState<Resource | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (resource) {
      setEditedResource(resource);
      setLocalComments(resource.comments || []);
    }
  }, [resource]);

  if (!resource || !editedResource) {
    return (
      <div className="text-2xl sm:text-4xl font-extrabold text-center p-5">
        Resource not found, please try again later
      </div>
    );
  }

  const handleFieldChange = (field: keyof Resource, value: any) => {
    setEditedResource((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSave = () => {
    useResourceStore.getState().updateResource({
      ...editedResource,
      comments: localComments,
    });
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedResource(resource);
    setLocalComments(resource.comments || []);
    setEditMode(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      deleteResource(resource.id);
      window.location.href = "/resourceList";
    }
  };
  const handleDeleteActivity = (activityId: string) => {
    setEditedResource((prev) =>
      prev
        ? {
            ...prev,
            activities: prev.activities?.filter((a) => a.id !== activityId),
          }
        : prev
    );
  };

  const handleAddActivity = () => {
    setEditedResource((prev) =>
      prev
        ? {
            ...prev,
            activities: [
              ...(prev.activities || []),
              { id: Date.now().toString(), name: "", link: "" },
            ],
          }
        : prev
    );
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEditedResource((prev) =>
        prev
          ? {
              ...prev,
              activities: [
                ...(prev.activities || []),
                { id: Date.now().toString(), name: file.name, link: url },
              ],
            }
          : prev
      );
    }
  };

  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto p-4 sm:p-6">
      <div className="text-center p-4 sm:p-5">
        <div className="flex justify-baseline">
          <Button onClick={() => window.history.back()}>Back</Button>
        </div>
        {editMode ? (
          // You can add your edit mode JSX here, for now show nothing or a placeholder
          <>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-5">
              {/* {resource?.title} */}
              <input
                type="text"
                value={editedResource.title}
                onChange={(e) => handleFieldChange("title", e.target.value)}
                className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-5 w-full border p-2"
                placeholder="Edit title"
              />
            </h1>
            <div className="flex justify-end gap-2 mb-4 sm:mb-5">
              <Button onClick={handleSave} className="mr-2 ">
                Save
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-5 border-b border-gray-200 border-t p-2">
              <p className="font-semibold text-sm sm:text-base">
                {/* {resource?.category} */}
                <input
                  type="text"
                  value={editedResource.category}
                  onChange={(e) => {
                    handleFieldChange("category", e.target.value);
                    handleFieldChange(
                      "categoryId",
                      e.target.value.toLowerCase().replace(/\s+/g, "")
                    );
                  }}
                  className="border rounded p-2 w-full mb-2"
                  placeholder="Edit category"
                />
              </p>
              <p className="font-semibold text-sm sm:text-base">
                {/* {resource?.grade} */}
                <select
                  value={editedResource.grade}
                  onChange={(e) => {
                    handleFieldChange("grade", e.target.value);
                    handleFieldChange(
                      "gradeId",
                      e.target.value.toLowerCase().replace(/\s+/g, "")
                    );
                  }}
                  className="border rounded p-2 w-full mb-2"
                >
                  <option value="">Select Grade</option>
                  {gradeCards.map((grade) => (
                    <option key={grade.id} value={grade.grade}>
                      {grade.grade}
                    </option>
                  ))}
                </select>
              </p>
              <p className="font-semibold text-sm sm:text-base">
                {/* {resource?.phase} */}
                <select
                  value={editedResource.phase}
                  onChange={(e) => {
                    handleFieldChange("phase", e.target.value);
                    handleFieldChange("phaseId", e.target.value.toLowerCase());
                  }}
                  className="border rounded p-2 w-full mb-2"
                >
                  <option value="">Select Phase</option>
                  {phaseCards.map((phase) => (
                    <option key={phase.id} value={phase.name}>
                      {phase.name}
                    </option>
                  ))}
                </select>
              </p>
            </div>
            <p className="text-sm sm:text-base">
              {" "}
              <textarea
                value={editedResource.description}
                onChange={(e) =>
                  handleFieldChange("description", e.target.value)
                }
                className="border border-gray-300 rounded-md p-2 mt-2 w-full"
                placeholder="Edit description"
              />
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-5">
              {resource?.title}
            </h1>
            {isAuthMode && (
              <div className="flex gap-3 justify-end mb-4 sm:mb-5">
                <Button onClick={() => setEditMode(true)}>Edit</Button>
                <Button onClick={handleDelete} className="mr-2">
                  Delete
                </Button>
              </div>
            )}
            <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-5 border-b border-gray-200 border-t p-2">
              <p className="font-semibold text-sm sm:text-base">
                {resource?.category}
              </p>
              <p className="font-semibold text-sm sm:text-base">
                {resource?.grade}
              </p>
              <p className="font-semibold text-sm sm:text-base">
                {resource?.phase}
              </p>
            </div>
            <p className="text-sm sm:text-base">{resource?.description}</p>
          </>
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 p-2 border-t border-b border-gray-200"></div>

      <div className="flex flex-col justify-center text-center gap-4 sm:gap-5 p-4 sm:p-5">
        <h3 className="text-xl sm:text-2xl font-bold">
          Activities for this Resource
        </h3>
        <DownloadLinks
          activities={
            editMode
              ? editedResource?.activities || []
              : resource?.activities || []
          }
          editMode={editMode}
          onDelete={editMode ? handleDeleteActivity : undefined}
        />
        {editMode && (
          <div>
            <>
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="mb-4"
              >
                Add Activity
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-5">
        <div className="p-1 border-t border-b border-gray-200"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Resources
        </h2>

        {editMode ? (
          <>
            <label className="font-semibold mt-4">Wakelet Embed Code:</label>
            <textarea
              value={editedResource.wakeletcode || ""}
              onChange={(e) => handleFieldChange("wakeletcode", e.target.value)}
              className="border border-gray-300 rounded-md p-2 mt-2 w-full"
              placeholder="Paste Wakelet embed code here"
              rows={4}
            />
          </>
        ) : (
          <>
            {resource?.wakeletcode ? (
              <div
                className="flex justify-center border-2 sm:border-4 border-gray-400"
                dangerouslySetInnerHTML={{ __html: resource.wakeletcode }}
              ></div>
            ) : (
              <div className="text-center font-bold text-xl sm:text-2xl">
                No resources available for this resource
              </div>
            )}
          </>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <CommentSection
          comments={localComments}
          setComments={setLocalComments}
          editMode={editMode}
        />
      </div>

      <div className="p-1 border-t border-gray-200"></div>
    </div>
  );
};

export default ResourcePage;
