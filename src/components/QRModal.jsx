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
      <div className="relative custom-modal rounded-2xl md:py-[80px] md:px-[109px] p-5  max-w-3xl z-10 shadow-lg">
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
          {/* Placeholder Background */}

          {/* Modal Content */}
          <div className="relative z-10 text-center space-y-4 bg-white p-5 rounded-md">
            <p className="text-[40px] font-bold text-[#050506]">
              Scan to download
            </p>
            <p className="text-base font-medium text-[#737373] leading-relaxed">
              Scan the QR code with your phone camera and follow the link to
              download
            </p>
            {/* Placeholder QR Code */}

            <Image
              className="mx-auto flex"
              src={qr}
              alt=""
              width={311}
              height={311}
            />
            <p className="text-sm font-medium text-[#050506]">
              Download Velox and sign up or log in to your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRModal;
