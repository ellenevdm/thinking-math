"use client";
import { ContactFormInputs, ContactFormSchema } from "@/types/validationScema";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/input";
import TextArea from "../ui/textarea";
import Button from "../ui/Button";

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
      className="space-y-6 bg-white p-6 rounded-lg shadow-sm border mx-10"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-4 space-y-2 mt-2">
        {" "}
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="font-semibold">
            Name:
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-sm text-red-500 mt-1">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors?.email && (
            <span className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject" className="font-semibold">
          Subject:
        </label>
        <Input
          id="subject"
          {...register("subject")}
          placeholder="Enter subject"
        />

        {errors.subject && (
          <span className="text-sm text-red-500 mt-1">
            {errors.subject.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="font-semibold">
          Message:
        </label>
        <TextArea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="What is your message?"
        />

        {errors.message && (
          <span className="text-sm text-red-500 mt-1">
            {errors.message.message}
          </span>
        )}
      </div>
      <Button variant="primary" className="w-full">
        Send
      </Button>
    </form>
  );
};

export default EmailForm;
