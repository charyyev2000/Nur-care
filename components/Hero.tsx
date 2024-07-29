"use client";

import Image from "next/image";
import "../styles/hero.styles.css";
import Button from "@/components/Button";
import { useState } from "react";

import SignupForm from "./SignupForm";

const Hero = () => {
  const [click, setClick] = useState(false);

  const openForm = () => setClick(true);

  return (
    <section>
      {/* {click ? (
        <SignupForm />
      ) : ( */}
      <>
        <div className="hero-content">
          <h1>Homecare, Home Delivered</h1>
          <p>
            We have simplified the process of accessing healthcare and booking
            nurses. You no longer have to hunt for a reliable nurse and go
            through a lengthy booking process. With the help of our
            user-friendly app, you can find and schedule an at-home nurse visit
            in just a few taps.
          </p>

          <Button
            title="Sign up for waitlist"
            arrow
            type="button"
            // onClick={() => setClick(true)}
            // onClick={setClick(true)}
            onClick={openForm}
          />
        </div>
        <div className="hero-image">
          <Image src="/home-image2.png" alt="Nurses Profiles" layout="fill" />
        </div>
      </>
      {/* )} */}
    </section>
  );
};

export default Hero;
