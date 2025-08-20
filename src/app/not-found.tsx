'use client';

import SecondaryButton from "../components/buttons/secondary-button";


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[url('/notFoundBgMobile.svg'),linear-gradient(292deg,#E0ECFE_0.55%,#FCFDFF_99.45%)] 
  bg-no-repeat bg-right-bottom bg-contain lg:bg-[url('/notFoundBg.svg'),linear-gradient(292deg,#E0ECFE_0.55%,#FCFDFF_99.45%)] 
  md:bg-no-repeat md:bg-right md:bg-contain" >
      {/* Main Content */}
      <div className="flex flex-col items-center gap-4 px-4 text-center">
        <h1 className="text-[24px] md:text-5xl font-bold text-[#050506]">Error 404</h1>
        <p className="text-[16px] md:text-xl text-[#050506] mb-8">Oops... Page not found. Let’s get you back home</p>
        <SecondaryButton onClick={() => window.location.href = "/"}>Go back home</SecondaryButton>
      </div>
    </div>
  );
}
