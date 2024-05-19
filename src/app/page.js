// import { useState } from "react";

import Counter from "@/components/Counter/Counter";

const HomePage = async () => {
  // console.log("rahat hasan");
  const res = await fetch("http://localhost:5000/cyber");
  const CyberData = await res.json();
  // console.log(CyberData);
  return (
    <div className="m-10 flex flex-col">
      <h1 className="mx-auto font-semibold">This is NEXT JS homepage !!!</h1>
      <Counter></Counter>
      <div className="md:flex justify-around  p-5 ">
        {CyberData.slice(0,3).map((data) => (
          <div key={data.id} className="card w-96 mb-10 mt-10 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
               {data.title}
                <div className="badge badge-secondary">{data.price}</div>
              </h2>
              <p>{data.description}</p>
              <div className="card-actions justify-end">
                <div className="btn btn-outline">See more</div>
                <div className="btn btn-outline">Buy Now</div>
              </div>
            </div>
          </div>
        ))
        }
      </div>

    </div>

  );
};

export default HomePage;