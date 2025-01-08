import React from "react";
import aboutImage from "../../assets/image/abou.jpg";

const About = () => {
  return (
    <div id="About" className=" text-white font-sans py-32">
      {/* Header */}

      {/* Main Section */}
      <main className="px-8  text-center">
        <h2 className="text-7xl max-w-[800px] mx-auto w-full font-bold -10">
          Delivering Digital Excellence Since 2020
        </h2>
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h3 className="text-5xl font-extrabold leading-tight">
              CREATE AND INVEST <br />
              <span className="text-purple-700">Create your own STARTUP</span>
            </h3>
            <p className="text-white font-bold text-xl ">
              We are 100% committed to taking your startup from zero to step
              hundred.
            </p>
            <div className="flex space-x-8">
              <div>
                <h4 className="text-3xl text-purple-700 font-bold">1.5+</h4>
                <p className="text-white">Experience More Than 1.5 years.</p>
              </div>
              <div>
                <h4 className="text-3xl  text-purple-700 font-bold">2.5x</h4>
                <p className="text-white">
                  We claim that we are 2.5 times faster, more effective, and
                  perform better than others.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex justify-center">
            {/* <div className="absolute  right-4"> */}
            <img src={aboutImage} alt="Illustration" className="rounded-lg " />
            {/* </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
