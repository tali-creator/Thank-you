import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [text, setText] = useState(false);

  function mouseOver() {
    setText(true);
  }
  function mouseOut() {
    setText(false);
  }

  return (
    <div className="h-full flex flex-col justify-center relative items-center">
      <h1
        className={` ${
          text ? "text-green-500" : "text-red-500"
        } duration-200 transition-colors text-3xl font-black text-center md:text-5xl px-24`}>
        Hello Ma 😊! <br />
        Merry Christmas and Happy New Year in Advance
      </h1>
      <NavLink
        to={"/appreciation"}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        className="bg-green-500 px-5 text-2xl  hover:scale-105 font-black text-white py-2 rounded-lg transition-colors ease-linear duration-200 cursor-pointer hover:bg-red-500 my-5">
        Click To Reveal
      </NavLink>
      <img
        className={` ${
          text ? "w-[140px]" : "w-[100px]"
        } transition-all duration-500 transform rotate-130  -translate-6 absolute -top-3 left-0 `}
        src="/christmassTree1.png"
        alt=""
      />
      <img
        className={`${
          text ? "w-[140px]" : "w-[100px]"
        } absolute transition-all duration-500 rotate-40 -bottom-11 left-0 `}
        src="/christmassTree2.png"
        alt=""
      />
      <img
        className={`${
          text ? "w-[180px]" : "w-[140px]"
        } absolute transition-all duration-500 -rotate-135 translate-7 -top-14 right-0`}
        src="/christmassTree3.png"
        alt=""
      />
      <img
        className={`${
          text ? "w-[140px]" : "w-[100px]"
        } absolute transition-all duration-500 -rotate-40 translate-3 -bottom-7 right-0 `}
        src="/christmassTree4.png"
        alt=""
      />
    </div>
  );
}
