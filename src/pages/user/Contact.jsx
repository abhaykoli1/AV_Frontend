import React from "react";

function Contact() {
  return (
    <div id="Contact" className="container mx-auto py-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" px-8 py-3 rounded shadow-lg text-gray-300">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Contact Us</h2>
          <p className="text-lg mb-6">
            Reach out to our team for any queries or assistance with our IT
            services. We’re here to support your needs with our reliable and
            professional solutions.
          </p>
          <p className="mb-2">
            <strong>Office Address:</strong> Manbagh Jaisinghpura Khor, Jaipure
            Rajsthan 302027
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@avbigbuddy.site
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +91 9509961818
          </p>
        </div>

        <div>
          <form className=" border-[.5px] border-gray-500 p-5 rounded-md shadow-lg text-white">
            <input
              placeholder="Name"
              type="text"
              className="w-full p-2 mb-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
            />
            <div className="flex items-center mb-4">
              <select className="p-2 mr-2  rounded outline-none bg-transparent border-b-[.5px] border-gray-500">
                <option value="+91">+91 (India)</option>/Users/abhay/Desktop/Screenshot 2024-12-14 at 10.23.02 PM.png
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
            />

            <textarea
              placeholder="Message"
              className="w-full p-2 mb-4 rounded text-black outline-none bg-transparent border-b-[.5px] border-gray-500"
            ></textarea>

            <button
              type="submit"
              className="w-full border-none rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
