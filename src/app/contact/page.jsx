"use client";
import "../css/contact.css";

import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import "../css/contact.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [text, setText] = useState("");
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
  const HandelSubmit = (e) => {
    e.preventDefault();
    setText("");
    toast.info("Message Send", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <>
      <div className="flex mx-10 py flex-col w-auto justify-around border-0 border-black py-6 shadow-2xl shadow-black rounded-md my-7 md:flex-row">
        {/* ------------------------------------------mobile num-------------------------- */}
        <div className="flex flex-col justify-center items-center border-0 rounded-xl border-black shadow-md shadow-black px-12 py-3">
          <div className="flex flex-row items-center border-b-2 border-black ">
            <FaMobileAlt /> <div className="pl-3">Mobile</div>
          </div>
          <div>9316129963</div>
        </div>

        {/* ---------------------------------------------------------address-------------------------- */}
        <div className="flex flex-col justify-center items-center border-0 rounded-xl border-black shadow-md shadow-black px-12 py-3">
          <div className="flex flex-row items-center border-b-2 border-black ">
            <MdEmail /> <div className="pl-3">Email</div>
          </div>
          <div>makwanajaydip350@gmail.com</div>
        </div>
        {/* --------------------------------------------------Email----------------------------------------------------- */}
        <div className="flex flex-col justify-center items-center border-0 rounded-xl border-black shadow-md shadow-black px-12 py-3">
          <div className="flex flex-row items-center border-b-2 border-black ">
            <IoIosHome /> <div className="pl-3">Address</div>
          </div>
          <div>Prantij ,Gujrat</div>
        </div>
      </div>

      {/* -------------------------------------------------GET IN TOUCH---------------------------------------------- */}

      <div className="w-auto flex justify-center items-center my-28">
        <div className="shadow-2xl shadow-black rounded-md">
          <div className="git">GET IN TOUCH</div>
          {/* -----------------------------------form----------- */}
          <form action="" onSubmit={HandelSubmit}>
            <div className="flex flex-row">
              <div className="pinput cursor-not-allowed shadow-xl">
                <input
                  type="text"
                  className="cursor-not-allowed"
                  placeholder="Your Name"
                  disabled="disabled"
                  value={data?.name}
                  autoComplete="off"
                />
              </div>
              <div className="pinput cursor-not-allowed shadow-xl">
                <input
                  value={data?.email}
                  className="cursor-not-allowed"
                  type="text"
                  disabled="disabled"
                  placeholder="Your Email"
                  autoComplete="off"
                />
              </div>
              <div className="pinput cursor-not-allowed shadow-xl ">
                <input
                  type="text"
                  className="cursor-not-allowed"
                  disabled="disabled"
                  value={data?.mobile}
                  placeholder="Your Phone Number"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="tinput">
              <textarea
                name="message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                id=""
                cols="30"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <input type="submit" value="send" />
            </div>
          </form>
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
    </>
  );
};

export default Contact;
