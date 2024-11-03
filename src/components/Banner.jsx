import React from "react";
import bannerImg from '../assets/bannerImg.png'
export default function Banner() {
  return (
    <div className="hero bg-base-200 rounded-2xl p-8 mb-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="rounded-lg py-4"
        />
        <div>
          <h4 className="text-5xl font-bold mb-8">Books to freshen up your bookshelf!</h4>
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
}
