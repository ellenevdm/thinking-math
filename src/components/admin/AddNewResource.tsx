"use client";
import { gradeCards } from "@/data/dummyGrades";
import { phaseCards } from "@/data/dummyPhases";
import { Resource } from "@/types/resource";
import { FC, useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";

interface AddNewResourceFormProps {}

const AddNewResourceForm: FC<AddNewResourceFormProps> = () => {
  const [grade, setGrade] = useState("");
  const [phase, setPhase] = useState({});
  const { register, handleSubmit, reset } = useForm<Resource>();

  const onSubmit: SubmitHandler<Resource> = (data) => {
    console.info("Form submitted with data:", data);
    reset();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 space-y-2 mt-2"
      >
        <div className="flex gap-4 space-y-2 mt-2">
          {" "}
          <div className="flex flex-col gap-2">
            {" "}
            <p className="flex flex-col">
              <label className="font-semibold">Resource Title:</label>
              <input
                type="text"
                {...register("title")}
                className="border border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Phase</label>
              <select
                className="border hover:cursor-pointer border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("phase")}
                onChange={(p) => setPhase(p.target.value)}
              >
                <option disabled selected>
                  Select Phase
                </option>
                {phaseCards.map((phase) => (
                  <option key={phase.id} value={phase.id}>
                    {phase.name}
                  </option>
                ))}
              </select>
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Grade</label>
              <select className="border  border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary hover:cursor-pointer">
                <option disabled selected>
                  Select Grade
                </option>
                {gradeCards.map((grade) => (
                  <option key={grade.id} value={grade.id}>
                    {grade.grade}
                  </option>
                ))}
              </select>
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Resource Description:</label>
              <textarea
                placeholder="Add a description..."
                {...register("description")}
                className="border  border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </p>
          </div>
          <div>
            <p className="flex flex-col">
              <label className="font-semibold">Category</label>
              <input
                type="text"
                {...register("category")}
                className="border  border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter category"
              />
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Resource Link:</label>
              <textarea
                rows={5}
                placeholder="Paste wakeletcode here..."
                {...register("wakeletcode")}
                className="border  border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </p>
            <p className="flex flex-col">
              <label className="font-semibold">Upload Activities:</label>
              <input
                accept="pdf/*,.docx, .doc, .pptx, .ppt, .xlsx, .xls, .txt, .csv"
                type="file"
                {...register("activities")}
                className="hover:cursor-pointer border  border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </p>
          </div>
        </div>
        <button className="bg-black text-white p-2 rounded-sm ">SUbmit</button>
      </form>
    </>
  );
};

export default AddNewResourceForm;
