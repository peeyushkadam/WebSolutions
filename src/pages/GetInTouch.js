import React from 'react'
import Navbar from '../components/Navbar'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function GetInTouch() {

  return (
    <div>
      <div className='w-full fixed top-0 z-10 bg-tranparent text-white text-center'>
        {/* <Navbar /> */}
        <Nav />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default GetInTouch
