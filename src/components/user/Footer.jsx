import React from "react";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/image/crm.png";
import logo from "../../assets/image/av.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  const footerLinks = [
    {
      title: "Links",
      links: [
        { name: "About Us", to: "/#About" },
        { name: "Contact Us", to: "/contact" },
        { name: "FAQs", to: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Privacy Policy", to: "/privacy&policy" },
        { name: "Terms of Service", to: "/" },
      ],
    },
  ];

  return (
    <footer className="border-t-[0.5px] border-gray-600 text-white pt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" w-96 text-cent">
            <img src={logo} className="h-40 w-40" />
            {/* <h1 className="-mt-7 ">AV BIG BUDDY</h1> */}
          </div>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.to}
                      className="text-gray-400 hover:text-pink-500 duration-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <a
        target="_black"
        href={
          "http://api.whatsapp.com/send/?phone=9509961818&text&type=phone_number&app_absent=0"
        }
        className="flex justify-center items-center lg:h-16 lg:w-16 md:h-14 md:w-14 h-12 w-12 fixed right-5 bottom-5  rounded-md z-50 cursor-pointer"
      >
        <img src={whatsapp} />
      </a>

      <div className="bg-pink-600 w-full flex flex-col items-center  gap-5 py-7 mt-8  text-white text-sm">
        <p>
          &copy; {new Date().getFullYear()} AV BigBuddy. All Rights Reserved.
        </p>
        {/* <div className="flex flex-col items-center"> */}
        {/* <p className="flex gap-5 items-center mx-auto  w-full "> */}
        {/* <a
              className="hover:text-white hover:scale-105"
              href="https://www.instagram.com/avbigbuddy/"
            >
              <Instagram />
            </a> */}
        {/* <a className="hover:text-white hover:scale-105" href="">
              <Twitter />
            </a>{" "}
            <a className="hover:text-white hover:scale-105" href="">
              <Facebook />
            </a> */}
        {/* </p> */}
        {/* </div> */}
      </div>
    </footer>
  );
}

export default Footer;
