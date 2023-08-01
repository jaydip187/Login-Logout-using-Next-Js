"use client";
import "../app/css/sing_reg.css";

import { useContext, useEffect, useState } from "react";
import IMGURL from "/public/images/BG.png";
import axios from "axios";
import Image from "next/image";
import { dataContext } from "./client";

const Home = () => {
  const [data, setData] = useState(null);

  const { userdata } = useContext(dataContext);

  const userInfo = async () => {
    try {
      const res = await axios.get("/api/about");

      setData(res?.data.userInfo);

      //console.log(res);
    } catch (err) {
      //console.log(err);
    }
  };

  useEffect(() => {
    userInfo();
  }, [userdata]);

  //console.log(data);
  return (
    // <div>
    //   <div className="h-screen z-0 w-full flex flex-row fixed">
    //     <div className="h-100% w-full "></div>
    //     <div className="h-full w-full bg-slate-700 "></div>
    //   </div>

    <div
      // style={{ backgroundImage: "{}" }}
      className=" border-0 w-full h-screen items-center flex justify-center border-red-700 fixed"
    >
      <Image
        src={IMGURL}
        object-fit="cover"
        // width="full"
        // width={500}
        alt="Picture of the author"
        layout="fill"
        className="z-0"
        objectPosition="center"
      />
      <div className="z-20">
        <h1
          style={{ fontSize: "50px", fontWeight: "100" }}
          className=" font-black  text-black z-20 font-am"
        >
          {data ? (
            <div>
              <h1>&quot;Hello , {data?.name} &quot;</h1>
            </div>
          ) : (
            <div>
              <h1>&quot; Hey , it`s Jaydip&quot;</h1>
              <br />
              &quot;I Am Web Devloper...&quot;
            </div>
          )}
        </h1>
      </div>
    </div>
    // </div>/
  );
};

export default Home;
