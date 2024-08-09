import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar';

type LayoutProps = {
    children: React.ReactNode;
  };


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;