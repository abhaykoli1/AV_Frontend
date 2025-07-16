import React from "react";
import Hero from "./hero";
import Services from "./Services";
import Contact from "./Contact";
// import Footer from "./Footer";
import Counter from "./counter";
import WhyChooseUs from "./whyChooseUS";
import About from "./About";
import MeetTheTeam from "./team";
import Products from "./Products";
import AboutSection from "./aboutSection";

const Home = () => {
  return (
    <div className="lg:container mx-auto">
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <Counter />
      <About />
      <MeetTheTeam />
      <Products />
      {/* <Services /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
