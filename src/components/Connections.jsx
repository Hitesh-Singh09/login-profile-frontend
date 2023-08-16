import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Data from "./connectionsData";
import { useState } from "react";

const Connections = ({setLoginUser,user}) => {
  const [data, setData] = useState(Data);
  return (
    <>
      <div className=" flex w-full">
        <Dashboard setLoginUser={setLoginUser} user={user}/>
        <div className=" w-full  bg-[#FAFBFF] ">
          <Header   user={user} />

          <div className="connections-list bg-[#FAFBFF] overflow-hidden">
            <div className="bg-[#1E2875] m-6 p-4 w-[71rem] h-[6rem] rounded-lg">
              <h1 className="text-white">My Connections</h1>
            </div>

            <div className="flex flex-wrap">
              {data.map((elm, ind) => {
                return (
                  <div key={ind}>
                    <div className="flex items-center justify-start  border-2 border-slate-300 m-6 p-2 rounded-lg w-72 h-36">
                      <div className="p-2">
                        <h3 className="my-2">{elm.name}</h3>
                        <p>{elm.position}</p>
                        <p> @ {elm.company}</p>
                        <button className="bg-[#BAB6EB] px-1 rounded-xl my-4">
                          <h6>Remove Connection</h6>
                        </button>
                      </div>
                      <img src={elm.img} alt="" className="m-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-4 my-8">
            <h5 className="mx-4">People you can also connect</h5>
            <div className="flex items-center justify-start  border-2 border-slate-300 m-4 p-2 rounded-lg w-72 h-36">
              <div className="p-2">
                <h3 className="my-2">Name</h3>
                <p>Position</p>
                <p> @ Company</p>
                <button className="bg-[#BAB6EB] px-1 rounded-xl my-4">
                  <h6>Remove Connection</h6>
                </button>
              </div>
              <img src="Ellipse 255.png" alt="" className="m-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connections;
