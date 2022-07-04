import React from 'react';
//IMPORT COMPONETS
import Navbar from '../components/Navbar';
import ListPlayer from '../components/ListPlayer';
import Footer from '../components/Footer'


function GetAllPlayer() {
  return (
    <>
      <Navbar/>
      <ListPlayer/>
      <Footer/>
    </>
  )
}

export default GetAllPlayer