import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerLinks = [
    {
      title: "Links",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Contact Us", to: "/contact" },
        { name: "Services", to: "/services" },
        { name: "FAQs", to: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Privacy Policy", to: "/" },
        { name: "Terms of Service", to: "/" },
      ],
    },
  ];

  return (
    <footer className="border-t-[0.5px] border-gray-600 text-white pt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-pink-500 duration-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#333] py-7 mt-8 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} AV BigBuddy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
