import React from "react";
import "./home.css";
const Home = () => {
  const imgarr = [
    "Group 5.png",
    "Group 6.png",
    "Group 7.png",
    "Group 8.png",
    "Group 9.png",
  ];
  return (
    <>
      <div className=" home w-full flex justify-center items-center">
        <div className=" flex flex-col w-2/3 items-center justify-center">
          <img src="./blue rocket.png" alt="" />
          <h1 className=" text-6xl font-semibold">Grow Faster Together</h1>
          <h1 className=" text-4xl font-semibold py-4 ">
            Find a mentor or Lead the path for someone
          </h1>
          <h1 className=" text-4xl font-semibold  ">It’s a win win!</h1>
          <div className=" btnCont mt-12 flex justify-between w-3/5">
            <button className=" h-12 px-12 rounded-2xl text-lg text-white font-medium">
              Find a Mentor
            </button>
            <button className=" h-12 px-12 rounded-2xl text-lg text-white font-medium">
              Become a Mentor
            </button>
          </div>
        </div>
        <div className=" w-1/3">
          <img
            className=" imageGirl"
            src="./Girl on psychologist online session.png"
            alt=""
          />
        </div>
      </div>
      <div className="expertise flex flex-col  items-center w-screen">
        <h1 className=" text-3xl font-semibold mt-4">
          Find the expertises from
        </h1>
        <div className=" mt-16 w-11/12 flex justify-between">
          <img className=" w-72" src="./image 2.png" alt="" />
          <img className=" w-72" src="./Rectangle 10.png" alt="" />
          <img className=" w-72" src="./Rectangle 11.png" alt="" />
        </div>
        <h1 className=" text-3xl font-semibold mt-24">
          Make your career growth in
        </h1>
        <div className=" flex h-32 justify-between w-11/12 mt-24">
          {imgarr.map((c) => (
            <img className=" w-52 h-full" src={`./${c}`} alt="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
