import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center text-center max-w-full">
      <div className="relative leading-[24px] z-[1]">
        {`Made with ♥ `}
        <a
          className="text-[inherit]"
          href="https://www.bhartikumari.in/"
          target="_blank"
        >
          <span className="[text-decoration:underline]">Bharti Kumari</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
