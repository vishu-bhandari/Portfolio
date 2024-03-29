import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {

  const {portfolioData} = useSelector((state)=>state.root);
  const {contact}=portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col flex-row items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-white">{"{"}</p>
          {Object.keys(contact).map((key) => (
            <p className="ml-5 ">
              <span className="text-tertiary">{key}: </span>{" "}
              <span className="text-tertiary">{contact[key]}</span>
            </p>
          ))}
          <p className="text-white">{"}"}</p>
        </div>
        <div className="h-[400px] ">
          <dotlottie-player
            src="https://lottie.host/4f77d31d-1724-492a-bf05-f9b8ee1fe3c9/Zg9gTPvAms.json"
            background="transparent"
            speed="0.5"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
