import React from "react";

const ControlledModal = ({ shouldDisplay, onClose, children }) => {
  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {shouldDisplay && (
        <div
          onClick={onClose}
          className="absolute left-0 top-0 overflow-auto bg-black bg-opacity-70 text-white w-full h-full"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <button
              onClick={onClose}
              className="bg-white text-black p-2 rounded-lg"
            >
              Hide Modal
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ControlledModal;
