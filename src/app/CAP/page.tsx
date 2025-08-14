import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import EarningProcess from "./components/EarningProcess";
import AmbassadorBenefits from "./components/AmbassadorBenefits";


export default function CAPPage() {
	return (
		<div className="w-full min-h-screen bg-[#f8f9fb]">
			<HeroSection />
			<HowItWorks />
			<EarningProcess />
			<AmbassadorBenefits />
		</div>
	);
}
