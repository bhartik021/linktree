import React from "react";

const BackgroundImage = ({ darkMode }) => {
  return (
    <div
      className="bg-black fixed top-0 left-0 w-full h-full"
      style={{
        backgroundImage: `url(${darkMode ? '../src/assets/bgDarkMode.png' : '../src/assets/bgLightMode.png'})`,
        zIndex: "-1",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default BackgroundImage;
