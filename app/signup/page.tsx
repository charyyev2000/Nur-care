"use client";

// import "/styles/signup.styles.css";
import "./signup.styles.css";
import Button from "@/components/Button";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Nurse");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, lastName, role, message }),
      });

      const result = await res.json();
      if (res.status !== 200) {
        setResponse(result.error || "Something went wrong, please try again.");
      } else {
        setResponse("Success! You are now subscribed.");
        setName("");
        setLastName("");
        setEmail("");
        setRole("Nurse");
        setMessage("");
      }
    } catch (error) {
      setResponse("An unexpected error occurred.");
    }

    setIsLoading(false);
  };
  return (
    <section>
      <div className="hero-text">
        <p>
          Join the revolution with Nur Home-Care. It's not just about making
          healthcare accessible; it's about providing service that's
          significantly more convenient, deeply personalized, and entirely
          centered around you and your needs.
        </p>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div className="fullName">
          <div>
            <label htmlFor="name" className="">
              First Name<span className="">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className=""
            />
          </div>

          <div>
            <label htmlFor="lastName" className="">
              Last Name<span className="">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className=""
            />
          </div>
        </div>

        <label htmlFor="email" className="">
          Email<span className="">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=""
        />

        <label htmlFor="role" className="">
          I am a<span className="">*</span>
        </label>
        <select
          name="role"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className=""
        >
          <option className="" value="Patient">
            Patient
          </option>
          <option className="" value="Nurse">
            Nurse
          </option>
          <option className="" value="Investor">
            Investor
          </option>
          <option className="" value="Media">
            Media
          </option>
        </select>

        <label htmlFor="message" className="">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=""
        ></textarea>

        {/* <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign Up"}
      </button> */}
        <Button title={isLoading ? "Loading..." : "Sign Up"} type="submit" />
        {response && <p>{response}</p>}
      </form>
    </section>
  );
};

export default SignUp;
