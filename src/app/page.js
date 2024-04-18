//import Image from "next/image";
//import styles from "./page.module.css";
"use client";

import React, { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import QuestionContainer from "@/components/question/QuestionContainer";
import Navigation from "@/components/Navigation/Navigation";
import Logout from "@/components/Logout";
import Timer from "@/components/Timer.js/Timer";
import { redirect, usePathname } from "next/navigation";

export default function Home() {
  //const pathname = usePathname();
  const [min, setMin] = useState(null);

  // useEffect(() => {
  //   const initialTime = localStorage.getItem('remainingMinute'); // Access localStorage here
  //   setMin(Number(initialTime));

  //     if(localStorage.getItem('isLoggedIn')){
  //   if(pathname=="/login"){
  // redirect("/")  
  //       }
  //     }
  //     else{
  //       redirect("/login") 
  //     }
  // }, []);

  
  return (
    <>

      <NavBar />
      <Timer minutes={min} />
      {/* <h1>Dash board</h1> */}
      <QuestionContainer />
      

    </>
  );
}
