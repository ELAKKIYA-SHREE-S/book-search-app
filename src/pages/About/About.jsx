import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.jpeg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p>BookHub is an innovative online platform dedicated to connecting book enthusiasts, offering a dynamic space where readers can discover, discuss, and share their favorite literary works. The website provides an extensive catalog spanning various genres, from classic literature to contemporary bestsellers, ensuring there's something for every reader. Users can easily explore curated lists, personalized recommendations, and engage in vibrant discussions within the BookHub community.</p>
            <p>At BookHub, the focus extends beyond mere book discovery. The website features an intuitive interface that allows users to create and maintain personalized reading lists, track their reading progress, and participate in virtual book clubs. Whether you're seeking the latest releases, timeless classics, or niche genres, BookHub serves as a comprehensive hub for bibliophiles to connect, discover new reads, and foster a shared passion for the written word. The platform's commitment to creating a vibrant and inclusive reading community makes BookHub an indispensable destination for those who cherish the immersive experience of diving into a good book.</p>
            <p className='about-text fs-22 fw-5'>ENJOY READING!!!</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
