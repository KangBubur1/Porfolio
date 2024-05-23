"use client"

import Welcome from "@/components/Welcome";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  
  return (
      <main className=" flex items-center bg-black justify-center min-h-screen ">
          <Welcome setName={setName} />
      </main>
  );
}

export default Home;
