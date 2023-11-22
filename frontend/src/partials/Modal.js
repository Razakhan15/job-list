import React from "react";

const Modal = ({ isOpen, closeModal, title, inputs }) => {
  const modalStyles = isOpen ? "block" : "hidden";

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${modalStyles}`}>
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div className="relative bg-white w-96 rounded-lg p-8">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="modal-content">
          {inputs.map((input, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{input.label}</label>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={input.value}
                onChange={(e) => input.onChange(e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
