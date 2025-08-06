import Image from "next/image";
import qr from "../../public/qr-code.svg";

const QRModal = ({ toggleModal }) => {
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
          <div className="relative z-10 text-center space-y-4 bg-white p-2 sm:p-5 rounded-md">
            <p className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#050506]">
              Scan to download
            </p>
            <p className="text-sm sm:text-base font-medium text-[#737373] leading-relaxed">
              Scan the QR code with your phone camera and follow the link to
              download
            </p>
            {/* Responsive QR Code */}
            <div className="flex justify-center">
              <Image
                className="mx-auto"
                src={qr}
                alt="QR code"
                width={200}
                height={200}
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 311px"
                style={{ width: "100%", maxWidth: 200, height: "auto" }}
              />
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#050506]">
              Download Velox and sign up or log in to your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRModal;
