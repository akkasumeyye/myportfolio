import React from "react";

import Main from '../components/Main';
import Projects from './Projects';
import ContactWithMe from './ContactWithMe';
import Navbar from '../components/Navbar';


const Home = () => {


  return (
    <div id="home">
      <Navbar/>
      <Main></Main>
      <Projects></Projects>
      <ContactWithMe></ContactWithMe>
    </div>
  )
}

export default Home