import styles from "~styles/home.module.css";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

import { FunctionComponent, useState } from "react";
import Socials from "./Socials";
import Link from "next/link";
import { cn } from "~lib/utils";

const Home: FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <div
          className={cn(show ? "lg:basis-1/6" : "lg:basis-1/12", `h-[6.8vh]`)}
        >
          <div
            className="w-full h-[8vh] hidden lg:grid lg:place-items-end "
          >
            <button
                onClick={handleShow}
                className={`z-10 -mr-4 `}
            >
              {!show ? <ChevronRightIcon className="h-8 w-8 p-2 bg-black shadow-md shadow-black rounded-full" /> 
              : 
              <ChevronLeftIcon className="h-8 w-8 p-2 shadow-md bg-black shadow-black rounded-full" />}
            </button>
          </div>
          <Socials show={show} />
        </div>

        <div
          className={cn(
            show ? "lg:basis-1/3" : "lg:basis-5/12", `
            bg-secondary lg:h-screen 
            flex flex-col items-center
            justify-center
            h-[30vh]
          `)}
        >
          <div
            className={cn("font-amatic text-5xl no-italic font-normal uppercase leading-[61px] text-black", styles.text_shadow)}
          >
            Hi there, i’M
            <div className="backdrop-blur-sm font-bold">Methe</div>
            Software Engineer
          </div>
        </div>

        <div className={cn(`
          h-[63.2vh] lg:h-screen 
          lg:basis-1/2
          grid place-items-center
        `)}>
            <div className="w-full flex flex-col items-center">
              <div className="w-[40%] lg:w-[50%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={process.env.BACKEND_URL +  "/assets/profile.png"}
                  alt="profile"
                />    
              </div> 
              <div className="w-[70%] md:w-[50%] shadow-2xl shadow-black rounded-full">
                <Link
                  href={"/projects"}
                  className={cn(`
                  block
                  p-4 
                  bg-black 
                  rounded-full
                  font-normal
                  font-amatic
                  text-2xl 
                  text-center
                  text-white 
                  leading-[30px] 
                  uppercase
                  hover:bg-[#2EE59D]
                  hover:text-black
                `)}
                >
                  SEE MY WORK 
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
