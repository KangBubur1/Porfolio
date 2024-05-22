"use client"

import Welcome from "@/components/Welcome";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  
  return (
      <main className=" h-dvh flex items-center justify-center">
          <Welcome setName={setName} />
      </main>
  );
}

export default Home;
