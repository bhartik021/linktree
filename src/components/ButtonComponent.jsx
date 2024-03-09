// ButtonComponent.jsx
import React from "react";

const ButtonComponent = ({ onClick, buttonText }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer py-2 px-4 md:px-6 bg-surface-color-light-mode w-full md:w-[540px] rounded-lg [backdrop-filter:blur(8px)] box-border flex flex-row items-start justify-start border-[1px] border-solid border-stroke-color-light-mode hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100"
    >
      <div className="flex-1 relative text-base leading-[24px] font-medium font-text-md text-text-color-light-mode text-center inline-block [backdrop-filter:blur(4px)] max-w-full">
        {buttonText}
      </div>
    </button>
  );
};

export default ButtonComponent;
