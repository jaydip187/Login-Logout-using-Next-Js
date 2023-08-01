"use client";

import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { dataContext } from "./client";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navlink = () => {
  const { userdata, setuserData } = useContext(dataContext);

  const getCookie = async () => {
    const res = await axios.get("/api/home");

    //console.log(res);
    setuserData(res?.data._id);
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      toast.success("Logout successful", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setuserData(null);
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getCookie();
  }, []);

  return (
    <div>
      <Head>
        <title>wertyui</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Raleway:wght@300&family=Teko:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <>
        <div className="mx-1.5 border-b-2 border-slate-900 shadow-black  w-auhref h-14 flex items-center justify-between ">
          <div className="text-3xl px-8 font-kusanagi font-fm  ">jaydip</div>
          <div className="">
            <ul
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontFamily: "'Raleway', sans-serif",
                fontFamily: "'Teko', sans-serif",
              }}
              className="flex flex-row font-semibold "
            >
              <div className="px-3">
                {" "}
                <li>
                  <Link
                    className="focus:text-indigo-500 hover:text-indigo-300"
                    href="/"
                  >
                    HOME
                  </Link>
                </li>
              </div>
              <div className="px-3">
                {" "}
                <li>
                  <Link
                    className="focus:text-indigo-500 hover:text-indigo-300"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </div>
              <div className="px-3">
                {" "}
                <li>
                  <Link
                    className="focus:text-indigo-500 hover:text-indigo-300"
                    href="/about"
                  >
                    About Us
                  </Link>{" "}
                </li>
              </div>

              {!userdata ? (
                <>
                  <div className="px-3">
                    {" "}
                    <li>
                      <Link
                        className="focus:text-indigo-500 hover:text-indigo-300"
                        href="/Singin"
                      >
                        Sing In
                      </Link>
                    </li>
                  </div>
                  <div className="px-3">
                    {" "}
                    <li>
                      <Link
                        className="focus:text-indigo-500 hover:text-indigo-300"
                        href="/Registertion"
                      >
                        Registration
                      </Link>
                    </li>
                  </div>
                </>
              ) : (
                <div className="px-3">
                  {" "}
                  <li onClick={logout}>
                    <Link
                      className="focus:text-indigo-500 hover:text-indigo-300"
                      href="/"
                    >
                      Logout
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          {/* <Outlet /> */}
        </div>
      </>

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

export default Navlink;
