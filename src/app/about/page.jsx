"use client";

import { useEffect, useState } from "react";
import "../css/sing_reg.css";

import a from "public/images/dribbble.png";
// import { useNavigate } from "react-router-dom";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const a = '../images/jo-klima-Wm6isT-UcmU-unsplash.jpg'

const About = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  const userInfo = async () => {
    try {
      const res = await axios.get("/api/about");
      if (!res.data.success) {
        toast.error("Login Frist", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        //
        setTimeout(() => {
          return router.replace("Singin");
        }, 800);
      }

      setData(res.data.userInfo);

      //console.log(res);
    } catch (err) {
      //console.log(err);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <div className="h-screen flex flex-row justify-center items-center truncate      ">
      <div className=" flex flex-row justify-center items-center  shadow-2xl shadow-slate-900  ">
        <div>
          <div className="p-10 flex flex-row regfull  ">
            <div className="regfull  ">
              <h2 className="font-am">About Us</h2>
              {/* -------------------------------form */}

              <div className="py-2">
                <div className="m-3 border-b-2 border-black mb-5 flex flex-row items-center ">
                  Name : {data?.name}
                </div>

                <div className="m-3 border-b-2 border-black mb-5 flex flex-row items-center ">
                  _id : {data?._id}
                </div>

                <div className="m-3 border-b-2 border-black mb-5 flex flex-row items-center ">
                  Email : {data?.email}
                </div>

                <div className="m-3 border-b-2 border-black mb-5 flex flex-row items-center ">
                  Mobile : {data?.mobile}
                </div>

                <div className="m-3 border-b-2 border-black mb-5 flex flex-row items-center ">
                  Password : {data?.password.substr(0, 20)}...
                </div>

                <div></div>
              </div>

              {/* imgggggggggggggggg------------------ */}
            </div>
          </div>
        </div>
        <div>
          {/* <h1>fhhbsfufk bf</h1> */}
          {/* <img src={a} alt="" style={{ height: "383px" }} />
           */}
          <Image src={a} alt="sdf" height={383} />
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default About;
