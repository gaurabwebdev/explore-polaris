import React from "react";
import { Link } from "react-router-dom";

const RatingPage = () => {
  return (
    <div className="m-6">
      <div className="mx-auto my-8 p-6 shadow-xl rounded-lg bg-white flex flex-col gap-5 items-center">
        <img
          className="w-80 h-20"
          src="https://client.smartsize.io/smartsizetext.png"
          alt="app-title"
        />
        <Link>
          <p>🤍 It takes less than 60 seconds to create a big smile </p>
        </Link>

        <div className="w-full md:w-[400px] bg-gray-300 rounded-md p-3 shadow-lg">
          <img
            className=""
            src="https://client.smartsize.io/illustration_welcome.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
