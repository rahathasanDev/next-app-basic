// import { useState } from "react";

import Counter from "@/components/Counter/Counter";
import Banner from "@/components/Shared/Banner";

const HomePage = () => {
  // console.log("rahat hasan");
  return (
   <div className="m-10 flex flex-col">
    <h1 className="mx-auto font-semibold">This is NEXT JS homepage !!!</h1>
    <Counter></Counter>
    
   </div>

  );
};

export default HomePage;