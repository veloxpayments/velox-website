"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const locations = ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Nova Scotia", "Other"];
const platforms = ["Instagram", "Twitter", "Facebook", "LinkedIn", "TikTok", "Other"];

interface SocialAccount {
  platform: string;
  handle: string;
}

export default function CapApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({ mode: "onBlur" });
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([]);
  const [platform, setPlatform] = useState("");
  const [handle, setHandle] = useState("");
  const [aboutCount, setAboutCount] = useState(0);

  const onAddSocial = () => {
    if (platform && handle) {
      setSocialAccounts([...socialAccounts, { platform, handle }]);
      setPlatform("");
      setHandle("");
    }
  };

  const onSubmit = (data: any) => {
    if (socialAccounts.length === 0) {
      alert("Please add at least one social media account.");
      return;
    }
    // Submit logic here
    reset();
    setSocialAccounts([]);
    setAboutCount(0);
    alert("Application submitted!");
  };

  return (
    <form
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8 h-[674px] overflow-y-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Personal Information */}
      <section>
        <h2 className="text-xl font-satoshi font-medium mb-2">Personal Information</h2>
        <hr className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-[#050506] text-sm font-medium mb-1">Full name*</label>
            <input
              type="text"
              className="w-full h-12 px-4 border border-[#D1D5DB] rounded-xl text-base focus:outline-none"
              placeholder="Enter full name"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message as string}</span>}
          </div>
          <div>
            <label className="block text-[#050506] text-sm font-medium mb-1">Email Address*</label>
            <input
              type="email"
              className="w-full h-12 px-4 border border-[#D1D5DB] rounded-xl text-base focus:outline-none"
              placeholder="Enter your email address"
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
            <label className="block text-[#050506] text-sm font-medium mb-1">Phone Number*</label>
            <input
              type="tel"
              className="w-full h-12 px-4 border border-[#D1D5DB] rounded-xl text-base focus:outline-none"
              placeholder="Enter your mobile number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
            />
            <div>
              <span className="text-xs text-gray-400">Please use the same one linked to your account if you&apos;re an existing user</span>
            </div>
            
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message as string}</span>}
          </div>
          <div>
            <label className="block text-[#050506] text-sm font-medium mb-1">Location*</label>
            <select
              className="w-full h-12 px-4 border border-[#D1D5DB] rounded-xl text-base focus:outline-none"
              {...register("location", { required: "Location is required" })}
              defaultValue=""
            >
              <option value="" disabled>Select your location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            {errors.location && <span className="text-red-500 text-xs">{errors.location.message as string}</span>}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-[#050506] text-sm font-medium mb-1">How long have you been in the province*</label>
          <select
            className="w-full h-12 px-4 border border-[#D1D5DB] rounded-xl text-base focus:outline-none"
            {...register("provinceDuration", { required: "This field is required" })}
            defaultValue=""
          >
            <option value="" disabled>Select an option</option>
            <option value="<1 year">Less than 1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value=">3 years">More than 3 years</option>
          </select>
          {errors.provinceDuration && <span className="text-red-500 text-xs">{errors.provinceDuration.message as string}</span>}
        </div>
      </section>

      {/* Social Media Presence */}
      <section>
        <h2 className="text-xl font-satoshi font-medium mb-2">Social Media Presence</h2>
        <hr className="mb-4" />
        <p className="mb-2 text-[#393939] text-sm">Add your social media handles to help us understand your online presence. You can add multiple platforms.</p>
        <div className="border border-dashed border-gray-300 rounded-xl p-4 mb-2">
          <h3 className="font-satoshi font-medium mb-2">Add social media account</h3>
          <div className="flex flex-col md:flex-row gap-2 mb-2">
            <select
              className="w-full md:w-1/3 h-12 px-4 border border-[#D1D5DB] rounded-xl text-base focus:outline-none"
              value={platform}
              onChange={e => setPlatform(e.target.value)}
            >
              <option value="" disabled>Select platform</option>
              {platforms.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <input
              type="text"
              className="w-full md:w-1/2 h-12 px-4 border border-[#D1D5DB] rounded-xl text-base focus:outline-none"
              placeholder="@username or profile URL"
              value={handle}
              onChange={e => setHandle(e.target.value)}
            />
            <button
              type="button"
              className="bg-[#5B7BFF] text-white px-4 rounded-xl font-medium h-12"
              onClick={onAddSocial}
            >+ Add</button>
          </div>
          <div className="mt-2 text-xs text-[#6F6F6F] italic">
            {socialAccounts.length === 0
              ? "No social media accounts added yet. Add at least one to strengthen your application"
              : socialAccounts.map((acc, idx) => (
                  <div key={idx} className="flex gap-2 items-center mb-1">
                    <span className="font-medium">{acc.platform}:</span>
                    <span>{acc.handle}</span>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* About Yourself */}
      <section>
        <h2 className="text-xl font-satoshi font-medium mb-2">Tell us more about yourself</h2>
        <hr className="mb-4" />
        <label className="block text-[#737373] text-sm font-medium mb-1">Tell us something interesting about yourself</label>
        <textarea
          className="w-full h-24 px-4 py-2 border border-[#D1D5DB] rounded-xl text-base focus:outline-none resize-none"
          placeholder="Share something unique about yourself or why you want to be a Velox Amabassador"
          maxLength={300}
          {...register("about", {
            required: "This field is required",
            onChange: (e: any) => setAboutCount(e.target.value.length),
          })}
        />
        <div className="text-xs text-gray-400 text-right">{aboutCount}/300 words</div>
        {errors.about && <span className="text-red-500 text-xs">{errors.about.message as string}</span>}
      </section>

      {/* Submit Button */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <button
          type="submit"
          className="bg-[#5B7BFF] text-white hover:text-[#5B7BFF] rounded-full px-8 py-3 font-medium text-lg shadow-md hover:bg-[#fff] border border-[#5B7BFF] transition"
        >
          Submit Application
        </button>
        <p className="text-[16px] text-gray-500 mt-2 text-center">
          By submitting this form, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </form>
  );
}