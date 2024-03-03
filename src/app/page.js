"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [trafficdata, settrafficdata] = useState({
    url: "",
    traffic: "20",
  });

  const  [trafficnum, settrafficnum] = useState(null);

  const handlechange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    settrafficdata({ ...trafficdata, [e.target.name]: value });
    console.log(trafficdata);
  };

  const sendtraffic = (e) => {
    e.preventDefault();
   settrafficnum(trafficdata.traffic)
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 ">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <form class="w-full md:w-[50%] mx-auto">
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your URL
            </label>
            <input
              onChange={(e) => handlechange(e)}
              name="url"
              type="string"
              id="url"
              value={trafficdata.url}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Traffic Number
            </label>
            <input
              onChange={(e) => handlechange(e)}
              name="traffic"
              type="number"
              id="traffic"
              value={trafficdata.traffic}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            onClick={sendtraffic}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      {trafficnum>0 && <div className="flex mt-10 min-h-screen flex-wrap items-center justify-center p-5 bg-white w-full">
        {Array.from({ length: parseInt(trafficdata.traffic) }).map(
          (index) => (
            <iframe
            className="border border-gray-900 w-auto"
              sandbox="allow-scripts"
              key={index}
              src={trafficdata.url}
              title={`Traffic ${index}`}
            />
          )
        )}
      </div>}
    </main>
  );
}
