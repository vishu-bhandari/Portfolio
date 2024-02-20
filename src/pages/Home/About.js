import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from 'react-redux';
function About() {
  const {loading,portfolioData} = useSelector((state)=>state.root);
  const {about}=portfolioData;
  const {skills,lottieURL, description1,description2}=about;
   
  return (
    <>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col flex-row ">
        <div className="h-[60vh] w-1/2 sm:w-full ">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
            loop
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full text-md  font-light">
          <p className="text-white">
           {description1 || ''}
          </p>
          <p className="text-white">
           {description2 || ''}
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">Here are a few technologies I've been working with recently:</h1>
       <div className="flex flex-wrap gap-8 mt-5 ">
       {
            skills.map((skill,index)=>{
                return(
                    <>
                        <div className="border border-tertiary py-3 px-5 sm:px-3 sm:text-sm hover:border-white text-tertiary hover:text-white transform transition-all duration-300 ease-in-out cursor-pointer">
                            <h1 className="">{skill}</h1>
                        </div>
                    </>
                )
            })
        }
       </div>
      </div>
    </>
  );
}

export default About;
