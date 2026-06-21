"use client";
import { useState } from "react";
import styles from "./login.module.css";

export default function AdminLogin() {
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");


    async function handleLogin()
    {
        const response=await fetch()
    }
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Admin Login</h1>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              placeholder="Enter admin email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className={styles.loginBtn}
          onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}