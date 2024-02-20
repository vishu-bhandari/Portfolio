import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";


function Experience() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  const {portfolioData} = useSelector((state)=>state.root);
  const {experiences}=portfolioData;
 
  return (
    <>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col flex-row ">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
         
            {experiences.map((experience, index) => (
              <>
                <div
                  className="cursor-pointer "
                  onClick={() => {
                    setselectedItemIndex(index);
                    console.log(index);
                  }}
                >
                  <div
                    className={`text-xl  px-10 py-2 ${
                      selectedItemIndex === index
                        ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-tertiary bg-opacity-20 sm:w-full"
                        : "text-white "
                    }`}
                  >
                    {experience.period}
                  </div>
                </div>
              </>
            ))}
            </div>
         
          <div className="gap-8 flex flex-col ">
            <h1 className="text-secondary text-4xl flex">
              {experiences[selectedItemIndex].title}
            </h1>
            <h1 className="text-tertiary text-2xl flex">
              {experiences[selectedItemIndex].company}
            </h1>
            <h1 className="text-white text-lg flex">
              {experiences[selectedItemIndex].description}
            </h1>
          
          </div>
        
      </div>
    </>
  );
}

export default Experience;
