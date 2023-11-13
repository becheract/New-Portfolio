import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Translucent overlay */}
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 ">
        {/* Modal container */}
        <div className="bg-white p-8 rounded-lg shadow-lg relative sm:w-8/12 w-9/12 lg:h-5/6 ">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 flex justify-center items-center bg-red-500 h-10 w-10 hover:bg-red-600 text-white font-semibold rounded"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} size="xs" />
          </button>
          {/* Modal content */}
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
