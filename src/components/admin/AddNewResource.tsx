"use client";
import { gradeCards } from "@/data/dummyGrades";
import { phaseCards } from "@/data/dummyPhases";
import { Resource } from "@/types/resource";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../ui/input";
import Select from "../ui/select";
import TextArea from "../ui/textarea";
import Button from "../ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResourceStore } from "@/store/resourceStore";
import { v4 as uuidv4 } from "uuid";
import { title } from "process";

const resourceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  phase: z.string().min(1, "Phase is required"),
  grade: z.string().min(1, "Grade is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  wakeletcode: z.string().min(1, "Wakelet code is required"),
});

type ResourceFormData = z.infer<typeof resourceSchema>;

const AddNewResourceForm: FC = () => {
  const addResource = useResourceStore((state) => state.addResource);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResourceFormData>({
    resolver: zodResolver(resourceSchema),
  });

  const [activities, setActivities] = useState<File[]>([]);

  const onSubmit: SubmitHandler<ResourceFormData> = (data) => {
    const newResource = {
      id: uuidv4(),
      title: data.title,
      category: data.category,
      categoryId: data.category.toLowerCase().replace(/\s+/g, ""),
      description: data.description,
      grade: data.grade,
      gradeId: data.grade.toLowerCase().replace(/\s+/g, ""),
      phase: data.phase,
      phaseId: data.phase.toLowerCase().replace(/\s+/g, ""),
      wakeletcode: data.wakeletcode,
      date: new Date(),
      activities: activities.map((file) => ({
        id: uuidv4(),
        name: file.name,
        link: "",
      })),
    };
    addResource(newResource);
    console.info("Form submitted with data:", data);
    console.info("Uploaded activities:", activities);
    console.info("Form Date:", new Date().toLocaleDateString());
    reset();
    setActivities([]); // Clear the activities array after submission
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setActivities((prevActivities) => [...prevActivities, ...newFiles]);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 space-y-2 mt-2"
      >
        <div className="flex flex-col lg:flex-row gap-4 space-y-2 mt-2">
          <div className="flex flex-col gap-2">
            <p className="flex flex-col">
              <label className="font-semibold">Resource Title:</label>
              <Input type="text" {...register("title")} />
              {errors.title && (
                <span className="text-red-500 text-xs">
                  {errors.title.message}
                </span>
              )}
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Phase</label>
              <Select
                options={phaseCards}
                {...register("phase")}
                defaultLabel="Select Phase"
              />
              {errors.phase && (
                <span className="text-red-500 text-xs">
                  {errors.phase.message}
                </span>
              )}
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Grade</label>
              <Select
                options={gradeCards}
                {...register("grade")}
                optionLabelKey="grade"
                defaultLabel="Select Grade"
              />
              {errors.grade && (
                <span className="text-red-500 text-xs">
                  {errors.grade.message}
                </span>
              )}
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Resource Description:</label>
              <TextArea
                placeholder="Add a description..."
                {...register("description")}
              />
              {errors.description && (
                <span className="text-red-500 text-xs">
                  {errors.description.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <p className="flex flex-col">
              <label className="font-semibold">Category</label>
              <Input type="text" {...register("category")} />
              {errors.category && (
                <span className="text-red-500 text-xs">
                  {errors.category.message}
                </span>
              )}
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Resource Link:</label>
              <TextArea
                rows={4}
                {...register("wakeletcode")}
                placeholder="Paste wakelet code here"
              />
              {errors.wakeletcode && (
                <span className="text-red-500 text-xs">
                  {errors.wakeletcode.message}
                </span>
              )}
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Upload Activities:</label>
              <input
                accept="pdf/*,.docx, .doc, .pptx, .ppt, .xlsx, .xls, .txt, .csv"
                type="file"
                multiple
                onChange={handleFileChange}
                className="hover:cursor-pointer border border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </p>
            {activities.length > 0 && (
              <div className="mt-2">
                <h4 className="font-semibold">Selected Files:</h4>
                <ul className="list-disc pl-5">
                  {activities.map((file, index) => (
                    <li
                      key={index}
                      className="text-sm flex justify-between items-center"
                    >
                      {file.name}
                      <Button className="text-xs text-red-700 border ">
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <Button variant="primary">Submit Test</Button>
      </form>
    </>
  );
};

export default AddNewResourceForm;
