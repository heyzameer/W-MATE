"use client";
import Navbar from "@/components/navbar";
import { collection } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase/firebaseConfig";
import Head from "next/head";
function Page() {
  const [snapshot, loading, error] = useCollection(
    collection(db, "wasteDonate")
  );
  const company = snapshot?.docs?.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font mt-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Do you need some waste ?
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Discover a unique and innovative approach to waste management with
              our service, where you can buy waste materials for various
              purposes.
            </p>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5  mx-auto">
              <div class="flex flex-wrap -m-4">
                {company?.map((e) => {
                  return (
                    <>
                      <div class="p-4 lg:w-1/4 md:w-1/2">
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {e.wasteType}
                            </h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {e.wasteDesc.slice(0, 200) + "..."}
                          </p>
                          {/* <Link> */}
                          <Link
                            href={`/waste-consumer/${e.id}`}
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Read more
                            <svg
                              class="w-3.5 h-3.5 ml-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </Link>
                          {/* </Link> */}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Page;
