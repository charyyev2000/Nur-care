// "use client";

import Hero from "@/components/Hero";
import SignupForm from "@/components/SignupForm";
// import { useEffect, useState, createContext } from "react";
import RootLayout from "./layout";
import Navbar from "@/components/Navbar";

// interface ContextProps {
//   formVisible: boolean;
//   setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const Context = createContext<ContextProps | undefined>(undefined);

export default function Home() {
  return (
    // <Context.Provider value={{ formVisible, setFormVisible }}>
    <>
      <Hero />
    </>
    // </Context.Provider>
  );
}
