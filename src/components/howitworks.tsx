import Image from "next/image";
import sign from "../../public/sign-up-img.svg";
import kyc from "../../public/kyc.svg";
import wallet from "../../public/wallet.svg";
import doller from "../../public/doller.svg";

const Howitworks = () => {
  return (
    <div>
      <section className="py-16 px-4 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-[24px] md:text-[40px] font-medium text-[#050506] mb-[5px]">
              How it Works
            </h2>
            <p className="text-[16px] text-[#2E2E2E] font-normal">
              Send money internationally in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {/* Step 1: Sign up */}
            <div className="flex flex-col items-center text-center shadow-custom rounded-[8px] p-6 md:p-4 bg-[#fff]">
              <div className="mb-6">
                <Image
                  src={sign}
                  alt="Sign up illustration"
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
              <h3 className="text-[24px] md:text-2xl font-medium text-[#050506] mb-2">
                Sign up
              </h3>
              <p className="text-[#737373] font-normal text-[16px] md:text-[18px] max-w-xs mx-auto leading-[21.6px]">
              Create your account in just a few taps
              </p>
            </div>

            {/* Step 2: KYC Verification */}
            <div className="bg-[#fff] flex flex-col items-center text-center shadow-custom rounded-lg p-6 md:p-4">
              <div className="mb-6">
                <Image
                  src={kyc}
                  alt="KYC Verification illustration"
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
              <h3 className="text-[24px] md:text-2xl font-medium text-[#050506] mb-[6px]">
                KYC Verification
              </h3>
              <p className="text-[#737373] font-normal text-[16px] md:text-[18px] max-w-xs mx-auto leading-[21.6px]">
               Verify your ID to keep your account safe
              </p>
            </div>

            {/* Step 3: Create Wallets */}
            <div className="bg-[#fff] flex flex-col items-center text-center shadow-custom rounded-lg p-6 md:p-4">
              <div className="mb-6">
                <Image
                  src={wallet}
                  alt="Create Wallets illustration"
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
              <h3 className="text-[24px] md:text-2xl font-medium text-[#050506] mb-[6px]">
                Create Wallets
              </h3>
              <p className="text-[#737373] font-normal text-[16px] md:text-[18px] max-w-xs mx-auto leading-[21.6px]">
                Open wallets in multiple currencies instantly
              </p>
            </div>

            {/* Step 4: Send money */}
            <div className="bg-[#fff] flex flex-col items-center text-center shadow-custom rounded-lg p-6 md:p-4">
              <div className="mb-6">
                <Image
                  src={doller}
                  alt="Send money illustration"
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
              <h3 className="text-[24px] md:text-2xl font-medium text-[#050506] mb-[6px]">
                Send money
              </h3>
              <p className="text-[#737373] font-normal text-[16px] md:text-[18px] max-w-xs mx-auto leading-[21.6px]">
                Choose a currency, enter the amount and hit send 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Howitworks;
