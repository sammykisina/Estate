import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="mask-icon" href="/logo.svg" className="" />
        <title>LaraEstate</title>
      </Head>

      <div className="bg-gray-50 h-auto pt-2">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        <main className="">{children}</main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
