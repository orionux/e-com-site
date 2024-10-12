"use client";


import React, { useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar';
import Head from 'next/head';
import Script from 'next/script';

type LayoutProps = {
  children: React.ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <NavBar />
      <main className='layout-margin'>{children}</main>
      <Footer />
      <Script type="text/javascript" src="/assets/js/vendor/jquery-1.12.4.min.js" />
      <Script type="text/javascript" src="/assets/js/vendor/modernizr-3.11.7.min.js" />
      <Script type="text/javascript" src="/assets/js/popper.js" />
      <Script type="text/javascript" src="/assets/js/bootstrap.min.js" />
      <Script type="text/javascript" src="/assets/js/jquery.magnific-popup.min.js" />
      <Script type="text/javascript" src="/assets/js/isotope.pkgd.min.js" />
      <Script type="text/javascript" src="/assets/js/imagesloaded.pkgd.min.js" />
      <Script type="text/javascript" src="/assets/js/jquery.counterup.min.js" />
      <Script type="text/javascript" src="/assets/js/waypoints.min.js" />
      <Script type="text/javascript" src="/assets/js/ajax-mail.js" />
      <Script type="text/javascript" src="/assets/js/owl.carousel.min.js" />
      <Script type="text/javascript" src="/assets/js/plugins.js" />
      <Script type="text/javascript" src="/assets/js/main.js" />
    </>
  );
};

export default Layout;