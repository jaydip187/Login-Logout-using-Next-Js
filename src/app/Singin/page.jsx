"use client";

import { MdEmail } from "react-icons/md";
// import { Link, useNavigate } from "react-router-dom"
import "../css/sing_reg.css";
import { RiLockPasswordFill } from "react-icons/ri";
import a from "public/images/diego-ph-5LOhydOtTKU-unsplash.jpg";
import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { dataContext } from "@/components/client";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const a = '../images/jo-klima-Wm6isT-UcmU-unsplash.jpg'

const Singin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userdata, setuserData } = useContext(dataContext);
  const router = useRouter();

  const LoginFun = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      return toast.error("Enter All Details", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    try {
      const data = { email, password };

      const res = await axios.post("/api/login", data);
      //console.log(res);
      if (!res.data.success)
        return toast.error(`${res?.data.message}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      setuserData(res?.data.emailchaeck._id);
      toast.success("Login successful", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-row justify-center items-center truncate      ">
      <div className=" flex flex-row-reverse justify-center items-center  shadow-2xl shadow-slate-900">
        <div>
          <div className="p-10 flex flex-row regfull   ">
            <div className="regfull  " style={{ height: "383px" }}>
              <h2 className="font-am">Login</h2>
              {/* -------------------------------form */}

              <div className="py-2">
                <form method="POST">
                  <div className="m-3 border-b-2 border-black  mb-5 flex flex-row items-center ">
                    <label htmlFor="email">
                      <MdEmail />
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                      placeholder="Your Email Address"
                    />
                  </div>

                  <div className="m-3 border-b-2 border-black flex mb-5 flex-row items-center ">
                    <label htmlFor="password">
                      <RiLockPasswordFill />
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                      placeholder="Your Password"
                    />
                  </div>

                  <div>
                    <input type="submit" onClick={LoginFun} value="sign in" />
                  </div>
                </form>

                {/* <span className='text-sky-600 mt-4'></span> */}
              </div>
              <div className="text-sky-600 pt-5 mt-10">
                <Link href="/Registertion">Create an account</Link>{" "}
              </div>

              {/* imgggggggggggggggg------------------ */}
            </div>
          </div>
        </div>
        <div>
          {/* <h1>fhhbsfufk bf</h1> */}
          {/* <img src={a} alt="" style={{ height: "383px" }} />
           */}
          <Image src={a} alt="asdfgh" height={383} />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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

export default Singin;
