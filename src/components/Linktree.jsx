import React, { useEffect } from "react";
import BackgroundImage from "./BackgroundImage";
import Footer from "./Footer";

const Linktree = () => {
  const redirectToURL = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
     <BackgroundImage />   
     <div
        className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto"
        style={{ zIndex: "1" }} // Ensure the content is above the background
      >
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            className="h-36 w-36 rounded-full mb-4 border-4 border-white shadow-lg"
            src="../src/assets/bharti.svg"
            alt="Bharti Kumari"
          />

          <h1
            className="font-bold text-black mb-3"
            style={{
              fontSize: "2rem",
            }}
          >
            Bharti Kumari
          </h1>

          <p className="text-lg text-black-100 mb-6 text-center">
            Amazon ML Summer'23 | SIH'23 Finalist | Samsung SFT - Top 50 |
            Technical Writer | Mentor @GSSoC | MongoDB Community Creator
          </p>

          <div className="w-[588px] overflow-x-auto flex flex-col items-start justify-start p-6 box-border gap-[16px_0px] max-w-full z-[1]">
            <button 
            onClick={() => redirectToURL("https://www.bhartikumari.in/")}
            className="cursor-pointer py-2 px-[23px] bg-surface-color-light-mode w-[540px] rounded-lg [backdrop-filter:blur(8px)] box-border flex flex-row items-start justify-start border-[1px] border-solid border-stroke-color-light-mode hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="flex-1 relative text-base leading-[24px] font-medium font-text-md text-text-color-light-mode text-center inline-block [backdrop-filter:blur(4px)] max-w-full">
                Portfolio
              </div>
            </button>
            <button 
            onClick={() => redirectToURL("mailto:bhartik021@gmail.com")}
            className="cursor-pointer py-2 px-[23px] bg-surface-color-light-mode w-[540px] rounded-lg [backdrop-filter:blur(8px)] box-border flex flex-row items-start justify-start border-[1px] border-solid border-stroke-color-light-mode hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="flex-1 relative text-base leading-[24px] font-medium font-text-md text-text-color-light-mode text-center inline-block [backdrop-filter:blur(4px)] max-w-full">
                Gmail
              </div>
            </button>
            <button 
            onClick={() => redirectToURL("https://www.linkedin.com/in/bhartik021/")}
            className="cursor-pointer py-2 px-[23px] bg-surface-color-light-mode w-[540px] rounded-lg [backdrop-filter:blur(8px)] box-border flex flex-row items-start justify-start border-[1px] border-solid border-stroke-color-light-mode hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="flex-1 relative text-base leading-[24px] font-medium font-text-md text-text-color-light-mode text-center inline-block [backdrop-filter:blur(4px)] max-w-full">
                LinkedIn
              </div>
            </button>
            <button 
            onClick={() => redirectToURL("https://twitter.com/bhartik021")}
            className="cursor-pointer py-2 px-[23px] bg-surface-color-light-mode w-[540px] rounded-lg [backdrop-filter:blur(8px)] box-border flex flex-row items-start justify-start border-[1px] border-solid border-stroke-color-light-mode hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="flex-1 relative text-base leading-[24px] font-medium font-text-md text-text-color-light-mode text-center inline-block [backdrop-filter:blur(4px)] max-w-full">
                Twitter
              </div>
            </button>
            <button 
            onClick={() => redirectToURL("https://github.com/bhartik021")}
            className="cursor-pointer py-2 px-[23px] bg-surface-color-light-mode w-[540px] rounded-lg [backdrop-filter:blur(8px)] box-border flex flex-row items-start justify-start border-[1px] border-solid border-stroke-color-light-mode hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="flex-1 relative text-base leading-[24px] font-medium font-text-md text-text-color-light-mode text-center inline-block [backdrop-filter:blur(4px)] max-w-full">
                GitHub
              </div>
            </button>
            <button 
            onClick={() => redirectToURL("https://www.instagram.com/bhartik021/")}
            className="cursor-pointer py-2 px-[23px] bg-surface-color-light-mode w-[540px] rounded-lg [backdrop-filter:blur(8px)] box-border flex flex-row items-start justify-start border-[1px] border-solid border-stroke-color-light-mode hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="flex-1 relative text-base leading-[24px] font-medium font-text-md text-text-color-light-mode text-center inline-block [backdrop-filter:blur(4px)] max-w-full">
                Instagram
              </div>
            </button>
            <button 
            onClick={() => redirectToURL("https://medium.com/@bhartik021")}
            className="cursor-pointer py-2 px-[23px] bg-surface-color-light-mode w-[540px] rounded-lg [backdrop-filter:blur(8px)] box-border flex flex-row items-start justify-start border-[1px] border-solid border-stroke-color-light-mode hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="flex-1 relative text-base leading-[24px] font-medium font-text-md text-text-color-light-mode text-center inline-block [backdrop-filter:blur(4px)] max-w-full">
                Medium
              </div>
            </button>
          </div>
        </div>
      </div>

    < Footer />

    </div>
    </div>
  );
};

export default Linktree;
