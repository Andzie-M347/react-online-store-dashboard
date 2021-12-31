import React from 'react';
import Navbar from '../components/header/navbar';
import Footer from './footer/footer';
import { Sidebar } from './sidebar/sidebar';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className='lzs-layout'>
        <Sidebar />
        <main className='lzs-main'>
          <div className='lzs__wrapper'>
            <Navbar />
            <div className='container-fluid'>{children}</div>
          </div>

          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
};
