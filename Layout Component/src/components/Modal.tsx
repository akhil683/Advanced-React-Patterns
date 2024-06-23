import { useState } from "react";

const Modal = ({ children }: any) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="absolute left-0 top-0 overflow-auto bg-black bg-opacity-70 text-white w-full h-full"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShow(false)}
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

export default Modal;
