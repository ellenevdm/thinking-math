"use client";
import { ContactFormInputs, ContactFormSchema } from "@/types/validationScema";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const EmailForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({ resolver: zodResolver(ContactFormSchema) });
  const onSubmit = (data: ContactFormInputs) => {
    console.info("Form submitted", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <span className="text-sm text-red-500 mt-1">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors?.email && (
          <span className="text-sm text-red-500 mt-1">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject")}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.subject && (
          <span className="text-sm text-red-500 mt-1">
            {errors.subject.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message:
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {errors.message && (
          <span className="text-sm text-red-500 mt-1">
            {errors.message.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </form>
  );
};

export default EmailForm;
