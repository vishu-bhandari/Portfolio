import React from "react";
import Header from "../../components/Header";
import About from "./About";
import Intro from "./Intro";
import Experience from "./Experience";
import Project from "./Project";
import Course from "./Course";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";



function Home() {
  const {loading,portfolioData} = useSelector((state)=>state.root);
  
  return (
    <>
      <div>
        <Header />
       {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
        
          <Intro />
          <About/>
          <Experience/>
          <Project/>
          <Course/>
          <Contact/>
          <Footer/>
          <LeftSider/>
          
        </div>
       )}
      
    
  
      </div>
    </>
  );
}

export default Home;
