import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeLink = "bg-white btn text-base text-[#23BE0A] font-semibold border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white";
  const inActiveLink = "bg-white btn text-base border-none shadow-none text-[#131313]/80 hover:bg-[#23BE0A] hover:text-white font-semibold";
  const navCenter =
    <>
      <li><NavLink className={({isActive})=>isActive?activeLink:inActiveLink} to={'/'}>Home</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?activeLink:inActiveLink} to={'/listed-books'}>Listed Books</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?activeLink:inActiveLink} to={'/pages-to-read'}>Pages to Read</NavLink></li>
    </>
  const buttons = 
    <>
    <button className="text-white font-semibold text-base btn bg-[#23BE0A] hover:bg-[#23BE0A]/80">Sign In</button>
    <button className="text-white font-semibold text-base btn bg-[#59C6D2] hover:bg-[#59C6D2]/80">Sign Up</button>
    </>
  return (
    <div className="navbar justify-between flex bg-base-100 container mx-auto px-2 mb-6">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
          >
            {navCenter}
            {buttons}
          </ul>
        </div>
        <a className="font-bold text-2xl">Book Vibe</a>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navCenter}</ul>
      </div>
      <div className="">
        <div className="space-x-2 hidden lg:flex items-start">
          {
            buttons
          }
        </div>
      </div>
    </div>
  );
}
