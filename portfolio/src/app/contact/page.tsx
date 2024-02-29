'use client'

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Going to Login page");
    router.push("/login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-between flex flex-col space-y-6">
        <h1 className="text-6xl font-bold">Contact Page</h1>
        <button className="flex bg-gradient-to-r from-cyan-500 to-blue-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-800 shadow shadow-sky-500/50 w-60 h-60 rounded shadow-xl ring-1 ring-offset-1 ring-stone-400" onClick={handleClick}>
          <div className="flex flex-col items-start justify-between p-3">
            <h2 className="text-3xl">Projektin nimi</h2>
            <div className="flex flex-col items-start">
              <p>Projektin kuvaus</p>
              <p>Tämä on projektin kuvaus</p>
              <p>Hieno kuvaus</p>
            </div>
          </div>  
        </button>
        <button className="w-100 h-100 rounded bg-white" >

        </button>
      </div>
    </main>
  );
}
