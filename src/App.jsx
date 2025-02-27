import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/user/layout";
import "./index.css";
import Contact from "./pages/user/Contact";
import About from "./pages/user/About";
import FAQs from "./pages/user/Faq";
import Home from "./pages/user";
import Products from "./pages/user/Products";
import PrivacyPolicy from "./pages/user/privacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="" element={<Home />} />
        <Route path="contact-Us" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="products" element={<Products />} />
        <Route path="privacy&policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
