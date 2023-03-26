import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Translucent overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center ">
        {/* Modal container */}
        <div className="bg-white p-8 rounded-lg shadow-lg lg:w-5/12 w-10/12 lg:h-3/5 h-2/5">
          {/* Close button */}
          <button
            className="flex justify-center items-center bg-red-500 h-10 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded float-right"
            onClick={onClose}
          >
            <div className="w-2 h-2">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </button>
          {/* Modal content */}
          <div className="h-80 ">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
