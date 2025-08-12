
import ContactForm from "../ContactForm";

const ContactModal = ({ toggleModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={toggleModal}
      ></div>

      {/* Modal Content */}
      <div className="relative custom-modal rounded-2xl bg-white shadow-lg z-10 w-full max-w-[90vw] sm:max-w-md lg:max-w-2xl p-4 sm:p-8 lg:py-[60px] lg:px-[80px]">
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
        <div className="relative flex flex-col items-center space-y-4">
          {/* Contact form*/}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
