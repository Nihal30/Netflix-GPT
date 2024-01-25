import React from "react";

const videoTitle = ({ overview, original_title }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{original_title}</h1>
      <p className="text-lg font-bold py-6 w-1/3">{overview}</p>
      <div className="flex">
        <button className=" bg-white text-lg text-black font-bold p-3 px-14  flex rounded-lg hover:bg-opacity-70">
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseBVUIRE2sWQXZQ8PMst8Ma5ldRO5p7cvAXWRexmm0ubfTA8OEyRNB9koN2l0zCOwAuo&usqp=CAU"
            alt="play"
            style={{ width: 30, height: 30, marginRight: 2 }}
          />{" "}
          Play
        </button>
        <button className=" bg-gray-500 text-lg text-white font-bold p-3 px-10 mx-2 opacity-70 rounded-lg flex">
          More Info
        </button>
      </div>
    </div>
  );
};

export default videoTitle;
