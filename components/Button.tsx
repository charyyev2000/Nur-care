"use client";

import { useContext } from "react";
import "../styles/styles.button.css";
// import { Context } from "@/app/page";

interface ButtonProps {
  type: "button" | "submit";
  title: string;
  arrow?: boolean;
  onClick?: () => void;
}

const Button = ({ title, arrow, type, onClick }: ButtonProps) => {
  // const context = useContext(Context);

  // const { formVisible, setFormVisible } = context;
  // const [formVisible, setFormVisible] = useContext(Context);
  if (type === "button") {
    return (
      <button type={type} onClick={onClick}>
        <a href="/signup">
          {title}
          {arrow && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          )}
        </a>
      </button>
    );
  }

  return (
    <button type={type} onClick={onClick}>
      {title}
      {arrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      )}
    </button>
  );
};

export default Button;
