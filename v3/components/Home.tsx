import type { NextPage } from "next";
import Image from 'next/image';
import { useEffect } from "react";
import "animate.css";
import styles from "../styles/home.module.css";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

// import { Container, Row, Col, Offcanvas, Button } from 'react-bootstrap'
import { useState } from "react";
import Socials from "./Socials";
import Link from "next/link";

const Home: NextPage = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => setShow(!show);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <div
          className={` h-[6.8vh] ${show ? "lg:basis-1/6" : "lg:basis-1/12"}`}
        >
          <div
            className="w-full h-[8vh] hidden lg:grid lg:place-items-end "
          >
            <button
                onClick={handleShow}
                className={[styles.chevronButton, "bg-black  shadow-md shadow-black"].join(" ")}
            >
              {!show ? <BiChevronRight size={20} /> : <BiChevronLeft size={20} />}
            </button>
          </div>
          <Socials show={show} />
        </div>

        <div
          className={
            `
              bg-secondary lg:h-screen 
              flex flex-col items-center
              justify-center
              ${show ? "lg:basis-1/3" : "lg:basis-5/12"}
              h-[30vh]
            `
          }
        >
          <div
            className={[
              styles.text_shadow,
              "font-amatic text-5xl no-italic font-normal uppercase leading-[61px] text-black",
            ].join(" ")}
          >
            Hi there, i’M
            <div className="backdrop-blur-sm font-bold">Methe</div>
            Software Engineer
          </div>
        </div>

        <div className={`
          h-[63.2vh] lg:h-screen 
          lg:basis-1/2
          grid place-items-center
        `}>
            <div className="w-full flex flex-col items-center">
              <div className="w-[40%] lg:w-[50%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={process.env.BACKEND_URL + "/assets/profile.png"}
                  alt="profile"
                />    
              </div> 
              <div className="w-[70%] md:w-[50%] shadow-2xl shadow-black rounded-full">
                <Link
                  href={"/projects"}
                >
                  <div className={`
                    p-4 
                    bg-black 
                    rounded-full 
                    font-amatic 
                    font-normal
                    text-2xl 
                    text-center
                    text-white 
                    leading-[30px] 
                    uppercase
                  `}> SEE MY WORK </div>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
