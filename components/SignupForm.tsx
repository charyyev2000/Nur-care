"use client";

import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import Button from "./Button";

const SignupForm = () => {
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fullName}>
        <div>
          <label htmlFor="name" className={styles.label}>
            First Name<span className={styles.span}>*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="lastName" className={styles.label}>
            Last Name<span className={styles.span}>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={styles.input}
          />
        </div>
      </div>

      <label htmlFor="email" className={styles.label}>
        Email<span className={styles.span}>*</span>
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.input}
      />

      <label htmlFor="role" className={styles.label}>
        I am a<span className={styles.span}>*</span>
      </label>
      <select
        name="role"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className={styles.select}
      >
        <option className={styles.option} value="Patient">
          Patient
        </option>
        <option className={styles.option} value="Nurse">
          Nurse
        </option>
        <option className={styles.option} value="Investor">
          Investor
        </option>
        <option className={styles.option} value="Media">
          Media
        </option>
      </select>

      <label htmlFor="message" className={styles.label}>
        Message:
      </label>
      <textarea
        name="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.textarea}
      ></textarea>

      {/* <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign Up"}
      </button> */}
      <Button title={isLoading ? "Loading..." : "Sign Up"} type="submit" />
      {response && <p>{response}</p>}
    </form>
  );
};

export default SignupForm;
