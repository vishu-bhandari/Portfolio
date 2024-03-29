import React from "react";
import SectionTitle from "../../components/SectionTitle";
// import { Projects } from "../../resources/Projects";
import { useSelector } from 'react-redux';

function Project() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  const {portfolioData} = useSelector((state)=>state.root);
  const {projects}=portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col flex-row ">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
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
                  {project.title}
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col flex-row sm:justify-start sm:items-start">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72 rounded-xl   "
          />

          <div className="gap-8 flex flex-col   ">
            <h1 className="text-secondary text-4xl flex">
              {projects[selectedItemIndex].title}
            </h1>
            <h1 className="text-tertiary text-2xl flex">
              {projects[selectedItemIndex].description}
            </h1>
           
            <h1 className="text-white text-lg flex">
              {projects[selectedItemIndex].technologies}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
