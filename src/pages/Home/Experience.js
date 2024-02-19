import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Experiences } from "../../resources/Experiences";

function Experience() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  return (
    <>
      <SectionTitle title="Experience" />
      <div className="flex py-10">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] ">
         
            {Experiences.map((experience, index) => (
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
                        ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-tertiary bg-opacity-20 "
                        : "text-white "
                    }`}
                  >
                    {experience.period}
                  </div>
                </div>
              </>
            ))}
         
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
