import React from "react";

function SectionTitle(props) {
  return (
    <>
      <div className="flex gap-8 items-center py-10">
        <h1 className="text-3xl text-white font-semibold">{props.title}</h1>
        <div className="w-60 h-[1px] bg-tertiary "></div>
      </div>
    </>
  );
  
}

export default SectionTitle;
