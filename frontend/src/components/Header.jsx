import React from "react";
import HashTag from "../assets/hashtag.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link to="/home" className="flex items-center">
          <img src={HashTag} alt="Logo Hashtag" className="h-10" />
          <p className="primary text-primary-400 text-2xl font-bold"> ashbnb</p>
        </Link>

        <Link
          to="/home"
          className="hidden items-center rounded-full border border-gray-300 px-4 py-2 shadow-md lg:flex"
        >
          <p className="border-r border-gray-300 pr-4">Qualquer Lugar</p>
          <p className="border-r border-gray-300 px-4">Qualquer Semana</p>
          <p className="px-4">Hospedes</p>

          <div className="bg-primary-400 rounded-full p-2 text-white">
            <svg
              xmlnse="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-2 rounded-full border border-gray-300 py-2 pr-4 pl-5 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p className="max-w-20 truncate sm:max-w-32">Felipe Farias</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
