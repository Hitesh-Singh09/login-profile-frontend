import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    phoneNumber: "",
    skills: "",
    courseName: "",
    institute: "",
    company: "",
    duration: "",
    position: "",
    college: "",
    course: "",
    year: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const register = () => {
    console.log("registered");
    const {name,email,password,reEnterPassword,phoneNumber,skills,courseName,institute,company,duration,position,college,course,year, bio,} = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post(`/register`, user)
        .then((res) => alert(res.data.message));
      navigate("/login");
    } else {
      alert("Invalid input");
    }
  };

  return (
    <>
      <div className=" register flex flex-col items-center justify-center  ">
        <div className="w-full h-48  flex items-top justify-between rounded-lg p-4 bg-[#1E2875] relative">
          <div>
            <h1 className="text-white ml-6">Register Here</h1>
            <p className="text-white font-extralight ml-6">
              Enter the required details here to get register.You can change it
              anytime you want.
            </p>
          </div>

          <div className="w-84 mt-4 mr-8 ">
            <button
              className="bg-white p-2 w-32 text-[#1E2875] rounded-lg hover:bg-slate-200 hover:text-blue-800"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>

        <div className="w-[90rem] h-5/6 bg-[#f3f5ff] flex  drop-shadow-lg  p-4 rounded-lg absolute top-[7rem] overflow-auto">
          <div className="left w-6/12  ml-4 flex flex-col">
            <h1>User Information</h1>

            <h4 className="mt-4 ml-1">Full Name</h4>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter Your Name Here"
              className="p-1 m-1 w-[35rem] rounded-lg"
            />
            <h4 className="mt-4 ml-1">Email</h4>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter Your Email Here"
              autoComplete="Off"
              className="p-1 m-1 w-[35rem] rounded-lg"
            />
            <h4 className="mt-4 ml-1">Password</h4>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Your Number Here"
              className="p-1 m-1 w-[35rem] rounded-lg"
            />

            <h4 className="mt-4 ml-1">Re-Enter Password</h4>
            <input
              type="password"
              name="reEnterPassword"
              value={user.reEnterPassword}
              onChange={handleChange}
              placeholder="Enter Your Number Here"
              className="p-1 m-1 w-[35rem] rounded-lg"
            />
            <h4 className="mt-4 ml-1">Phone Number</h4>
            <input
              type="number"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Your Number Here"
              className="p-1 m-1 w-[35rem] rounded-lg"
            />

            <h4 className="mt-4 ml-1 ">Skills</h4>
            <textarea
              name="skills"
              placeholder="Mention Your Skills here"
              value={user.skills}
              onChange={handleChange}
              id=""
              cols="30"
              rows="10"
              className="p-2 m-1 w-[35rem] h-24 rounded-lg"
            ></textarea>
          </div>

          <div className="right w-6/12 p-4 ml-6 flex flex-col">
            <h4 className="mt-7 ml-4 ">
              Any Certification Done ? Mention Here{" "}
            </h4>
            <div className="flex gap-5 mt-2 ml-4">
              <input
                type="text"
                name="courseName"
              value={user.courseName}
              onChange={handleChange}
                placeholder="Course Name"
                className="p-1 m-1 w-[15rem] rounded-lg"
              />
              <input
                type="text"
                name="institute"
              value={user.institute}
              onChange={handleChange}
                placeholder="Institute Name"
                className="p-1 m-1 w-[15rem] rounded-lg"
              />
            </div>

            <h4 className="mt-4 ml-4 ">Experience </h4>
            <div className="flex gap-5 mt-2 ml-4">
              <input
                type="text"
                name="company"
              value={user.company}
              onChange={handleChange}
                placeholder="Company Name"
                className="p-1 m-1 w-[12rem] rounded-lg"
              />
              <input
                type="text"
                name="duration"
              value={user.duration}
              onChange={handleChange}
                placeholder="Duration"
                className="p-1 m-1 w-[10rem] rounded-lg"
              />
              <input
                type="text"
                name="position"
              value={user.position}
              onChange={handleChange}
                placeholder="Position"
                className="p-1 m-1 w-[12rem] rounded-lg"
              />
            </div>

            <h4 className="mt-4 ml-4 ">Education</h4>
            <div className="flex flex-wrap gap-5 mt-2 ml-4">
              <input
                type="text"
                name="college"
              value={user.college}
              onChange={handleChange}
                placeholder="College Name"
                className="p-1 m-1 w-[12rem] rounded-lg"
              />
              <input
                type="text"
                name="course"
              value={user.course}
              onChange={handleChange}
                placeholder="Course"
                className="p-1 m-1 w-[10rem] rounded-lg"
              />
              <input
                type="text"
                name="year"
              value={user.year}
              onChange={handleChange}
                placeholder="Year"
                className="p-1 m-1 w-[12rem] rounded-lg"
              />
              <h4 className="mt-4 ml-1 ">Add Bio</h4>

              <textarea
                name="bio"
                placeholder="Write about you"
              value={user.bio}
              onChange={handleChange}
                id=""
                cols="30"
                rows="10"
                className="p-2 m-1 w-[35rem] h-24 rounded-lg"
              ></textarea>
            </div>

            <div className="w-84 m-12 flex items-center justify-center">
              <button
                className="bg-[#1E2875] p-3 w-32 text-white rounded-lg"
                onClick={register}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
