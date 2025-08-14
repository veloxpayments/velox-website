
import CapApplicationForm from "../capApplicationForm";
import ContactForm from "../ContactForm";

const CapApplicationModal = ({ toggleModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={toggleModal}
      ></div>

      {/* Modal Content */}
      <div className="relative z-50 custom-modal rounded-2xl bg-white shadow-lg z-10 w-full max-w-[90vw] sm:max-w-md lg:max-w-4xl p-4 sm:p-8 lg:py-[60px] lg:px-[80px]">
        {/* Cross Button */}
        <button
          onClick={toggleModal}
          className="absolute top-0 -right-14 bg-white p-2 rounded-full text-black hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Body */}
        <div className="relative flex flex-col items-center justify-center font-Satoshi space-y-4">
          {/* Contact form*/}
          <div className="text-center">
            <h1 className="text-[18px] font-[500] mb-2">
                Ambassador Application
            </h1>
            <p className="text-[16px] text-[#505050] font-Satoshi mb-2">
                Fill out the form below to apply for the Velox Community Ambassador Program. Our team will review your application and get back to you shortly.
            </p>
          </div>
          <CapApplicationForm />
        </div>
      </div>
    </div>
  );
};

export default CapApplicationModal;
