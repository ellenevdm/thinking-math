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

const AddNewResourceForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<Resource>();
  const [activities, setActivities] = useState<File[]>([]);

  const onSubmit: SubmitHandler<Resource> = (data) => {
    console.info("Form submitted with data:", data);
    console.info("Uploaded activities:", activities);
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

  // const handleRemoveFile = (index: number) => {
  //   setActivities((prevActivities) =>
  //     prevActivities.filter((_, i) => i !== index)
  //   );
  // };
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
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Phase</label>
              <Select
                options={phaseCards}
                {...register("phase")}
                defaultLabel="Select Phase"
              />
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Grade</label>
              <Select
                options={gradeCards}
                {...register("grade")}
                optionLabelKey="grade"
                defaultLabel="Select Grade"
              />
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Resource Description:</label>
              <TextArea
                placeholder="Add a description..."
                {...register("description")}
              />
            </p>
          </div>
          <div>
            <p className="flex flex-col">
              <label className="font-semibold">Category</label>
              <Input type="text" {...register("category")} />
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Resource Link:</label>
              <TextArea
                rows={4}
                {...register("wakeletcode")}
                placeholder="Paste wakelet code here"
              />
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
