import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="fixed top-0 w-full right-0 bg-transparent z-50">
        <Header />
      </div>
      <main className="absolute top-32 right-0 left-0">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default UserLayout;
