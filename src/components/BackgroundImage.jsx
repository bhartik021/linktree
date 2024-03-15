import React from "react";

const BackgroundImage = () => {
  return (
    <div
      className="bg-black fixed top-0 left-0 w-full h-full"
      style={{
        backgroundImage: "url('../src/assets/bgLightMode.png')",
        zIndex: "-1", // Ensure the background is behind the content
        backgroundAttachment: "fixed", // Keep the background image fixed
        backgroundRepeat: "no-repeat", // Prevent background image from repeating
        backgroundSize: "cover", // Ensure background image covers the entire container
      }}
    ></div>
  );
};

export default BackgroundImage;