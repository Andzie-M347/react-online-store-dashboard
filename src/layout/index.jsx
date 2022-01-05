import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/header/navbar';
import Footer from './footer/footer';
import { Sidebar } from './sidebar/sidebar';

import themeAction from '../redux/actions/actions';

export const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const _mode = localStorage.getItem('mode', 'light-background');
    const _colors = localStorage.getItem('color', 'accent-primary');

    dispatch(themeAction.setMode(_mode));
    dispatch(themeAction.setColor(_colors));
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className={`lzs-layout ${theme.mode} ${theme.color} `}>
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
