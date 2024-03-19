import React from 'react';
import Header from '../../components/Header/Header';
import About from '../About/About';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <About />
    </main>
  )
}

export default Home
