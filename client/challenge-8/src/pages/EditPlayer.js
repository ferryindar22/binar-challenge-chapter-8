import React from 'react'
//IMPORT COMPONETS
import Navbar from '../components/Navbar';
import Form from '../components/Form';

function EditPlayer() {
    return (
      <>
        <Navbar/>
        <h2 class="text-center text-dark mt-5">UPDATE USER</h2>
        <Form/>
      </>
    );
  }
  
  export default EditPlayer;