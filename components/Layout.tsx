import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='max-w-3xl'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
