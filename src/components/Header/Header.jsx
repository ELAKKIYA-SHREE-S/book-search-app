import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import video from "../../images/video-1.mp4";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex text-center text-white'>
                <video src={video} autoPlay loop muted />
                <h2 className='header-title text-capitalize'>find books of your choice.</h2><br />
                <p className='header-text fs-22 fw-3'>" There is more treasure in books than in all the pirate's loot on Treasure Island."</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header