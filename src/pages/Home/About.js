import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const skills=[
        "Javascript",
        "Node",
        "React",
        "Mongodb",
        "Express",
        "Firebase",
        "Redux & Axios"


    ]
  return (
    <>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col flex-row ">
        <div className="h-[60vh] w-1/2 sm:w-full ">
          <dotlottie-player
            src="https://lottie.host/ebffcb1a-698c-4ecc-96fe-1881cafa0508/VNE9inOpq7.json"
            background="transparent"
            speed="1"
            autoplay
            loop
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full text-md  font-light">
          <p className="text-white">
            I'm Vishu Bhandari, a dedicated web developer specializing in
            dynamic websites with the latest frameworks. With expertise in
            crafting engaging user experiences and leveraging cutting-edge
            technologies, I create bespoke solutions tailored to meet your
            business needs. Explore my portfolio to see how I can elevate your
            online presence through strategic web development.
          </p>
          <p className="text-white">
            I am proficient in Node.js, Express.js, MongoDB, Redux, and more.
            With expertise in API development, real-time communication, and
            secure authentication, I deliver robust web solutions. Explore my
            portfolio for innovative projects showcasing my versatile skill set.
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
