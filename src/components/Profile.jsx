import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";

const Profile = ({setLoginUser,user}) => {

  return (
    <>
      <div className=" flex ">
        <Dashboard setLoginUser={setLoginUser} user={user} />

        <div className="right  w-5/6 h-[46rem] bg-[#FAFBFF] text-center">
          <Header  user={user} />

          <div>
            <div className="w-[73rem] h-[14rem] rounded-lg mt-6 ml-4 bg-[#1E2875] flex  flex-col relative z-30">
              <h4 className=" text-white text-left ml-2 p-2">MY PROFILE</h4>
            </div>

            <div className=" overlap flex w-[66rem] h-[32rem]  bg-white mx-[4rem] z-40  rounded-lg overflow-auto">
              <div className="left-section w-6/12 rounded-l-lg">
                <div className="h-36 flex items-center justify-between m-6 p-4 ">
                  <img src="Ellipse 255.png" alt="" className="w-28 h-28" />
                  <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                    Upload Photo
                  </h6>
                </div>

                <div className=" border-2 border-slate-300 m-6 rounded-lg">
                  <div className="flex items-center justify-between m-2 p-2 ">
                    <div>
                      <h5>Your Name</h5>
                      <h4>{(user.name).toUpperCase()}</h4>
                    </div>
                    <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                      Edit
                    </h6>
                  </div>

                  <div className="flex items-center justify-between m-2 p-2 ">
                    <div>
                      <h5 className="text-left">Email</h5>
                      <h4>{user.email}</h4>
                    </div>
                    <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                      Edit
                    </h6>
                  </div>

                  <div className="flex items-center justify-between m-2 p-2 ">
                    <div>
                      <h5>Phone Number</h5>
                      <h4>+91 {user.phoneNumber}</h4>
                    </div>
                    <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                      Edit
                    </h6>
                  </div>
                </div>

                <div className=" border-2 border-slate-300 m-6 rounded-lg">
                  <div className="flex items-center justify-between m-2 p-2">
                    <h3>
                      About <span className="text-[#413B89]">{user.name}</span>
                    </h3>
                    <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                      Edit
                    </h6>
                  </div>
                  <p className="text-left m-4">
                    {user.bio}
                  </p>
                </div>

                <div className=" border-2 border-slate-300 m-6 rounded-lg">
                  <div className="flex items-center justify-between m-2 p-2">
                    <h3>Skills</h3>
                    <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                      Edit
                    </h6>
                  </div>
                  <div className="text-left m-2 p-2">
                    <h4>{user.skills}</h4>
                   
                  </div>
                </div>
              </div>

              <div className="right-section w-6/1 rounded-r-lg">
                <div className="flex border-2 border-slate-300 mx-10 mt-8 p-2 rounded-lg">
                  <div className="text-left ">
                    <h3>Professional Details</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam, ipsam?
                    </p>
                  </div>
                  <img
                    src="Stars.png"
                    alt=""
                    className="w-[4rem] h-[4rem] my-2"
                  />
                </div>

                <div className="flex items-center justify-between mx-10 my-2 p-2">
                  <h3>Certifications</h3>
                  <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                    Edit
                  </h6>
                </div>

                <div className="flex items-center justify-start border-2 border-slate-300 mx-12 my-3 p-2 rounded-[4rem]">
                  <img src="Vector.png" alt="" className="w-10 mx-10" />
                  <div>
                    <h3 className="mx-12 ">{user.courseName}</h3>
                    <h4 className="mx-12">{user.institute}</h4>
                  </div>
                </div>

                <div className="flex items-center justify-between mx-10 mt-6 p-2">
                  <h3>Experience</h3>
                  <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                    Edit
                  </h6>
                </div>

                <div className="flex items-center justify-start border-2 border-slate-300 mx-12 my-5 p-2 rounded-lg">
                  <div className="flex flex-col mx-6">
                    <div className="flex justify-between">
                      <h3>7 Years (2014-2021)</h3>
                      <span className="mx-1">
                        <h3>Full-time</h3>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <p>Oruphones</p>
                      <span className="mx-12">
                        <p>--Full Stack Developer</p>
                      </span>
                    </div>
                  </div>
                  <img src="oruphone.png" alt="" className="w-20 h-10" />
                </div>

                <div className="flex items-center justify-start border-2 border-slate-300 mx-12 my-5 p-2 rounded-lg">
                  <div className="flex flex-col mx-6">
                    <div className="flex justify-between">
                      <h3>6 Months (2014)</h3>
                      <span className="mx-1">
                        <h3>Intern</h3>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <p>Oruphones</p>
                      <span className="mx-12">
                        <p>--Full Stack Developer</p>
                      </span>
                    </div>
                  </div>
                  <img src="oruphone.png" alt="" className="w-20 h-10" />
                </div>

                <div className="flex items-center justify-between mx-10 mt-6 p-2">
                  <h3>Education</h3>
                  <h6 className="bg-[#F0EFFA]  mx-2 px-4 py-1 rounded-[2rem]">
                    Edit
                  </h6>
                </div>

                <div className="flex  flex-col border-2 border-slate-300 mx-12 my-5 p-2 rounded-lg">
                  <h4 className="text-[#413B89] text-left mx-4">
                   {user.college}
                  </h4>
                  <div className="flex items-center justify-between mx-4 my-2">
                    <h4>{user.duration}</h4>
                    <h4>{user.course}</h4>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque, nemo?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque, nemo?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque, nemo?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

