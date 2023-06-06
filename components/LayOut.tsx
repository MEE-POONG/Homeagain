import React from 'react';
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
// import { FaArrowUp } from "react-icons/fa";
import SiteHeader from "./SiteHeader";
import { LanguageContext } from './LanguageContext';
import { useState } from "react";

// import HeroSection from "@/container/Home/HeroSection";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <SiteHeader />
      <NavigationBar />
      <main>
        {children}
        <Footer />
        {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <FaArrowUp />
        </a> */}
      </main>
    </>
  );
};

export default Layout;