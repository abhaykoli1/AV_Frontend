import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../assets/image/av.png";

function Footer() {
  const footerLinks = [
    {
      title: "Links",
      links: [
        { name: "About us", to: "/#About" },
        { name: "Contact Us", to: "/contact-us" },
        { name: "FAQs", to: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Terms & Conditions", to: "/" },
        { name: "Privacy Policy", to: "/privacy&policy" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0A0219] text-white pt-12 relative overflow-hidden">
      <div className="absolute left-20 z-10 -bottom-20 w-96 h-96 bg-gradient-to-br from-[#031433] to-[#000A1D] rounded-full -translate-x-1/2"></div>
      <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-br from-[#031433] to-[#000A1D] rounded-full  translate-x-1/2"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        {/* Left side logo */}
        <div className="flex flex-col z-20 items-start">
          <img
            src={logo}
            alt="AV BigBuddy"
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* Links and Company */}
        <div className="grid grid-cols-2 gap-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="text-purple-400 hover:text-pink-500 transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-white text-black rounded-full p-2 hover:scale-110 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-white text-black rounded-full p-2 hover:scale-110 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/avbigbuddy/"
              target="_blank"
              className="bg-white text-black rounded-full p-2 hover:scale-110 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm py-8">
        &copy; {new Date().getFullYear()} AV BigBuddy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
