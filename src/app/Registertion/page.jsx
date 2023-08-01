"use client";
import { FaUserAlt } from "react-icons/fa";
// import { redirect } from "next/nevigation";
import { redirect, useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import Image from "next/image";
import Imgurl from "public/images/jo-klima-Wm6isT-UcmU-unsplash.jpg";
import { useContext, useState } from "react";
import axios from "axios";
import "../css/sing_reg.css";
import { dataContext } from "@/components/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  const { userdata, setuserData } = useContext(dataContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const HandleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser((pval) => {
      return {
        ...pval,
        [name]: value,
      };
    });
  };

  const sendData = async (event) => {
    event.preventDefault();
    const { name, email, mobile, password, cpassword } = user;

    if (!name || !email || !mobile || !password || !cpassword) {
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

    if (password !== cpassword) {
      return toast.error("Password is not same", {
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
    // e.preventDefult();

    const data = { name, email, mobile, password };
    try {
      //console.log(data);
      const resl = await axios.post("/api/registation", user);
      // redirect("/");
      // router.push("/");
      // alert(resl.data.message);
      // alert(resl.data.success);

      if (!resl.data.success)
        return toast.error(`${resl?.data.message}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      toast.success("Registration successful", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setuserData(resl.data.usersave._id);
      //console.log(userdata);
      //console.log(resl);
      setTimeout(() => {
        router.replace("/");
      }, 2000);

      // redirect("/");
    } catch (e) {
      //console.log(e);
    }
  };

  return (
    <div className="h-screen flex flex-row justify-center items-center truncate      ">
      <div className=" flex flex-row justify-center items-center  shadow-2xl shadow-slate-900  ">
        <div>
          <div className="p-10 flex flex-row regfull  ">
            <div className="regfull  ">
              <h2 className="font-am">Sign Up</h2>
              {/* -------------------------------form */}

              <div className="py-2">
                <form method="POST">
                  <div className="m-3 border-b-2 border-black mb-5 flex flex-row items-center ">
                    <label htmlFor="name">
                      <FaUserAlt />
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={HandleData}
                      autoComplete="off"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="m-3 border-b-2 border-black  mb-5 flex flex-row items-center ">
                    <label htmlFor="email">
                      <MdEmail />
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={HandleData}
                      autoComplete="off"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="m-3 border-b-2 border-black flex mb-5 flex-row items-center ">
                    <label htmlFor="mobile">
                      <BsFillTelephoneFill />
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      value={user.mobile}
                      onChange={HandleData}
                      autoComplete="off"
                      placeholder="Your Mobile mobile"
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
                      value={user.password}
                      onChange={HandleData}
                      autoComplete="off"
                      placeholder="Your Password"
                    />
                  </div>
                  <div className="m-3 border-b-2 border-black flex mb-5 flex-row items-center ">
                    <label htmlFor="cpassword">
                      <RiLockPasswordFill />
                    </label>
                    <input
                      type="password"
                      id="cpassword"
                      name="cpassword"
                      value={user.cpassword}
                      onChange={HandleData}
                      autoComplete="off"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <input type="submit" onClick={sendData} value="sign up" />
                  </div>
                </form>
              </div>

              {/* imgggggggggggggggg------------------ */}
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: "" }} className="">
          {/* <h1>fhhbsfufk bf</h1> */}
          <p className="absolute text-white mt-80 ml-16 ">
            {" "}
            {/* <NavLink to="/singin">Already Account</NavLink>{" "} */}
          </p>

          {/* <img src={Imgurl} alt="" style={{ height: "383px" }} /> */}
          <Image src={Imgurl} alt="rkreegrjgj " height={383} />
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

export default Login;
