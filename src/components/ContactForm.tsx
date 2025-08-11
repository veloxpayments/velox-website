'use client';
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    reset();
    alert("Message sent!");
  };

  return (
    <div className="flex-1 max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
      <h3 className="text-[#050506] text-2xl font-semibold mb-2">Send us a message</h3>
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
          <label className="block text-neutral-500 text-sm font-bold mb-1">Subject</label>
          <select
            className="w-full h-14 px-4 py-2 border border-[#51515466] rounded-xl text-base text-[#515154] focus:outline-none"
            {...register("subject", { required: "Subject is required" })}
          >
            <option value="">Select subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
          </select>
          {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message as string}</span>}
        </div>
        <div>
          <label className="block text-neutral-500 text-sm font-bold mb-1">Message</label>
          <textarea
            placeholder="Enter message"
            className="w-full h-40 px-4 py-2 border border-[#51515466] rounded-xl text-base placeholder:text-[#51515466] focus:outline-none resize-none"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <span className="text-red-500 text-xs">{errors.message.message as string}</span>}
        </div>
        <button type="submit" className="bg-[#050506] text-white rounded-full px-8 py-3 font-medium mt-2">Send message</button>
      </form>
    </div>
  );
};

export default ContactForm;