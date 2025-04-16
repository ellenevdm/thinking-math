import AddNewResourceForm from "@/components/admin/AddNewResource";
import React from "react";

function NewResource() {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center pb-20">
      <h1 className="text-3xl font-bold">Create a New Resource</h1>
      <p>Complete form below to add new resource</p>
      <AddNewResourceForm />
    </div>
  );
}

export default NewResource;
