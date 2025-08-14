'use client';
import React from "react";
import { useForm } from "react-hook-form";

interface ApplicationFormProps {
  title: string;
  closeModal?: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ title, closeModal }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    reset();
    alert("Message sent!");
    if (closeModal) closeModal();
  };

  return (
    <div className="flex-1 max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
      <h3 className="text-[#050506] text-2xl font-semibold mb-2">Apply for <span className="font-bold">{title}</span></h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-neutral-500 text-sm font-bold mb-1">Full name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full h-14 px-4 py-2 border border-[#51515466] rounded-xl text-base placeholder:text-[#51515466] focus:outline-none"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message as string}</span>}
        </div>
        <div>
          <label className="block text-neutral-500 text-sm font-bold mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full h-14 px-4 py-2 border border-[#51515466] rounded-xl text-base placeholder:text-[#51515466] focus:outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
        </div>
        <div>
          <label className="block text-neutral-500 text-sm font-bold mb-1">Resume link</label>
          <input
            type="text"
            placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
            className="w-full h-14 px-4 py-2 border border-[#51515466] rounded-xl text-base placeholder:text-[#51515466] focus:outline-none"
            {...register("resumeLink", {
              required: "Resume link is required",
              pattern: {
                value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/\S*)?$/,
                message: "Enter a valid URL",
              },
            })}
          />
          {errors.resumeLink && <span className="text-red-500 text-xs">{errors.resumeLink.message as string}</span>}
        </div>
        <div>
          <label className="block text-neutral-500 text-sm font-bold mb-1">Cover letter link</label>
          <input
            type="text"
            placeholder="Link to cover letter (Google Drive, Dropbox, etc.)"
            className="w-full h-14 px-4 py-2 border border-[#51515466] rounded-xl text-base placeholder:text-[#51515466] focus:outline-none"
            {...register("fullName", { required: "Full name is required" })}
          />
        </div>
        <button type="submit" className="bg-[#050506] self-start text-white rounded-full px-8 py-3 font-medium mt-2">Submit application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;