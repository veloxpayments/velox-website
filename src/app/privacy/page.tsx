
import React from "react";

const Terms = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] font-satoshi pt-7 md:px-0 md:pt-0">
      {/* Header Section */}
      <section className="w-full px-4 md:px-0">
        <header className="w-full h-[783px] md:h-auto flex flex-col items-center justify-center px-4 md:px-0 md:pt-[120px] pb-8 md:pb-0 bg-[#E4EEFE] md:bg-[linear-gradient(110deg,_#F0F3FB_0.23%,_#D1DAF4_99.77%)] rounded-2xl md:rounded-none min-h-[400px] relative overflow-hidden">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col md:items-start items-center justify-center  pb-0 md:px-4">
            <h1 className="text-[#050506] text-[30px] md:text-5xl font-bold mb-2 md:text-left">Privacy Policy</h1>
            <p className="text-[#737373] text-[16px] md:text-xl mb-2 text-center md:text-left">Last updated: 6th May 2024, 9:00pm</p>
            <div className="mt-8 w-[120px] md:w-[250px] bg-[#6584DB] h-[5px] rounded-full md:hidden mt-[128px]"></div>
          </div>
        </div>
      </header>
      </section>

      {/* Main Content Section */}
     <section className="w-full px-4 md:px-8 bg-[#F8F9FB]">
         <main className="max-w-5xl mx-auto w-full py-8 md:py-16 px-4 flex flex-col md:flex-row gap-12">
        {/* Main Terms Content */}
        <section className="flex-1">
          <div className="mb-8" id="info-collect">
            <h2 className="text-[#050506] text-[18px] md:text-3xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="text-[#737373] text-base md:text-lg mb-4">Personal Information: Full name, email, phone number, ID documents, address, and date of birth. Transaction Data: Amounts sent, recipient details, transaction history. Technical Data: Device type, browser, IP address, and usage logs. Cookies & Tracking: To improve your experience and analyze traffic.</p>
          </div>
          <div className="mb-8" id="use-data">
            <h2 className="text-[#050506] text-[18px] md:text-3xl font-semibold mb-2">2. How We Use Your Data</h2>
            <p className="text-[#737373] text-base md:text-lg mb-4">To process transactions securely. To verify your identity and comply with KYC/AML regulations. To improve customer support and service experience. For fraud detection and prevention. To send you service-related updates and offers (with your consent).</p>
          </div>
          <div className="mb-8" id="data-sharing">
            <h2 className="text-[#050506] text-[18px] md:text-3xl font-semibold mb-2">3. Data Sharing</h2>
            <p className="text-[#737373] text-base md:text-lg mb-4">We do not sell your data. We may share it with: Licensed financial institutions or payment partners. Government regulators, if legally required. Third-party services for identity verification or analytics (under strict agreements).</p>
          </div>
          <div className="mb-8" id="your-rights">
            <h2 className="text-[#050506] text-[18px] md:text-3xl font-semibold mb-2">4. Your Rights</h2>
            <p className="text-[#737373] text-base md:text-lg mb-4">Access, correct, or delete your data. Opt-out of marketing communications. Withdraw consent (where applicable).</p>
          </div>
        </section>
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-72 flex-shrink-0 hidden md:block">
          <div className="p-6 mb-6">
            <h3 className="text-[#6584db] text-xs font-semibold uppercase mb-4">On this page</h3>
            <ul className="space-y-4">
              <li>
                <a href="#info-collect" className="text-[#050506] font-bold text-base hover:text-[#6584db] transition-colors">Information we collect</a>
              </li>
              <li>
                <a href="#use-data" className="text-[#737373] text-base hover:text-[#6584db] transition-colors">How We Use Your Data</a>
              </li>
              <li>
                <a href="#data-sharing" className="text-[#737373] text-base hover:text-[#6584db] transition-colors">Data Sharing</a>
              </li>
              <li>
                <a href="#your-rights" className="text-[#737373] text-base hover:text-[#6584db] transition-colors">Your Rights</a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
     </section>
    </div>
  );
};

export default Terms;