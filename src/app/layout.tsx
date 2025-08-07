import React from "react";
import "./globals.css";

import Header from "../components/header";
import Footer from "../components/footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-[#F7F8FA]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
