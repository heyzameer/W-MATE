
"use client";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Link from "next/link";
function Navbar() {
  //   const [user, setUser] = useState(null);
  let user = useAuthState(auth)?.[0];

  const signin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // let user = useAuthState(auth)?.[0];
        // setUser(user);
      })
      .then((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    signOut(auth);
    // setUser(null);
  };

  // const Navbar = () => {
const openPopup = () => {
      // Your popup logic here
      const width = 400;
      const height = 550;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      window.open(
        'https://mediafiles.botpress.cloud/920ce3d4-da2b-4ab3-a9cc-e267cfe8d139/webchat/bot.html',
        'popup',
        `width=${width},height=${height},left=${left},top=${top}`
      );
    };
    // https://mediafiles.botpress.cloud/920ce3d4-da2b-4ab3-a9cc-e267cfe8d139/webchat/bot.html
//     <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
// <script src="https://mediafiles.botpress.cloud/920ce3d4-da2b-4ab3-a9cc-e267cfe8d139/webchat/config.js" defer></script>

  return (
    <>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" class="flex items-center">
            <img
              src="https://companieslogo.com/img/orig/WM-c6b6879b.png?t=1647860833"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WasteManage
            </span> */}
          </Link>
          <div class="flex md:order-2">
            {!user && (
              <button
                onClick={signin}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign In
              </button>
            )}
            {user && (
              <button
                onClick={logout}
                type="button"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
              >
                Sign Out
              </button>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
              <button
        onClick={openPopup}
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Chat Bot
      </button>


              </li>
</ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
