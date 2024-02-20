import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Courses } from "../../resources/Courses";

function Course() {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Courses" />

      <div className="flex py-10 gap-20 sm:flex-col flex-row ">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {Courses.map((Course, index) => (
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
                  {Course.title}
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col flex-row sm:justify-start sm:items-start">
          <div className="gap-8 flex flex-col  ">
            <h1 className="text-secondary text-4xl flex">
              {Courses[selectedItemIndex].title}
            </h1>
            <p className="text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              luptas expedita adipisci eaque, numquam
              possimus illo?
            </p>
          </div>
          <img
            src={Courses[selectedItemIndex].image}
            alt=""
            className="h-52 w-80 rounded-sm   "
          />
        </div>
      </div>
    </div>
  );
}

export default Course;
