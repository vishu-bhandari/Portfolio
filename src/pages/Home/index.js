import React from "react";
import Header from "../../components/Header";
import About from "./About";
import Intro from "./Intro";
import Experience from "./Experience";

function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About/>
          <Experience/>
        </div>
      </div>
    </>
  );
}

export default Home;
