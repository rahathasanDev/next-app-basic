"use client"

import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (

      <div className="flex flex-col mx-auto gap-3 mt-5 w-1/3 ">
        <h1 className='font-semibold'>A Simple counter :</h1>
        <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Increase</button>
        <button className="btn btn-outline">Counter {counter}</button >
        <button className="btn btn-neutral" onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div>
   
  );
};

export default Counter;