import React from "react";

const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-7">
        <a href="#home" className="">
          Home
        </a>
        <a href="#about" className="">
          About Me
        </a>
        <a href="#contact" className="">
          Contact
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Pedroardo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/pedroardo10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-ardometrius-tan-675293266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
