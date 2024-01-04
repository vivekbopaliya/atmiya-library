import React from "react";
import { Calendar } from "../ui/calender";
import whatsapplogo from "../images/whatsapp-logo.png";
import emailogo from "../images/email-logo.png";
import facebooklogo from "../images/facebook-logo.png";
import twitterlogo from "../images/twitter-logo.png";

const Footer = () => {
  return (
    <div className="py-4 flex justify-around items-center bg-black text-white">
      <main className="flex flex-col justify-center items-start ">
        <img
          src={
            "https://newsite.atmiyauni.ac.in//wp-content/uploads/2021/09/atmiyalogo-300x300.png"
          }
          alt="Atmiyalogo"
          className="w-32  h-32 rounded-full  my-2 object-contain"
        />

        <p className="py-2 ">Connect us on : </p>
        <div className="flex gap-4 row r">
          <a href="/">
            <img
              src={whatsapplogo}
              alt="Whatsapp "
              className="bounce-out-on-hover w-8 h-8 rounded-full"
            />
          </a>{" "}
          <a href="/">
            <img
              src={emailogo}
              alt="Email "
              className="bounce-out-on-hover h-8 w-8 rounded-full"
            />
          </a>{" "}
          <a href="/">
            <img
              src={facebooklogo}
              alt="Facebook"
              className="bounce-out-on-hover h-8 w-8 rounded-full"
            />
          </a>{" "}
          <a href="/">
            <img
              src={
                "https://freelogopng.com/images/all_img/1683191308instagram-logo-black-and-white.png"
              }
              alt="Instagram"
              className="bounce-out-on-hover h-8 w-8 rounded-full"
            />
          </a>{" "}
          <a href="/">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
              }
              alt="Linkedin"
              className="bounce-out-on-hover h-8 w-8 rounded-full"
            />
          </a>{" "}
          <a href="/">
            <img
              src={twitterlogo}
              alt="Twitter"
              className="bounce-out-on-hover h-8 w-8 rounded-full"
            />
          </a>{" "}
        </div>

        <p className="pt-10 text-sm text-gray-500">
          Copyright © 2023 Atmiya University, All rights reserved.
        </p>
      </main>
      <div className="flex flex-col">
        <p className="py-4 text-lg">Next events at your library :</p>
        <Calendar />
      </div>
    </div>
  );
};

export default Footer;
