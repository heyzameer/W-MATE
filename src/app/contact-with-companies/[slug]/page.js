"use client";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useParams } from "next/navigation";


import { z } from 'zod';

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import PageNotFound from "@/components/404";




const phoneSchema = z.string().min(10).max(10);
const emailSchema = z.string().email();

function Page() {
  const [contact, setContact] = useState({ phone: "", email: "" });
  const [confirm, setConfirm] = useState(true);
  const onchange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const { slug } = useParams();
  const submit = async () => {
    try {
      phoneSchema.parse(contact.phone);
      emailSchema.parse(contact.email);

      const dbInstance = collection(db, `companies/${slug}/contact`);
      await addDoc(dbInstance, contact);

      // setConfirm(!confirm);
      setConfirm(false);
      setContact({ phone: "", email: "" });
      setTimeout(() => {
        setConfirm(true);
      }, 3000); // 3 seconds delay
    } catch (error) {
      console.error(error);
      alert('Please enter a valid email address and password');

    }
  };


  console.log(slug);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const snap = await getDoc(doc(db, "companies", `${slug}`));

      if (snap.exists()) {
        console.log(snap.data());
        setData(snap.data());
      } else {
        console.log("No such document");
      }
    }
    getData();
  }, []);

  if (!data) {
    return (
      <>
        <Navbar />
        <PageNotFound />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="max-w-5xl border md:px-4  mx-auto px-4 mt-40 mb-20 py-6">
        <div className="my-10">
          <h1 className="text-2xl font-bold">{data.companyName}</h1>
          <p className="text-gray-600">{data.address}</p>
        </div>
        <div>
          <p>{data.desc}</p>
          <div className="mt-4">
            <strong>Service Areas : </strong>{" "}
            {data.serviceArea.map((e) => {
              return <span>{e}, </span>;
            })}
          </div>
          <div className="mt-4">
            <strong>Equipment and Technology : </strong>{" "}
            {data.equipmentAndTechnology}
          </div>
          <div className="mt-4">
            <strong>Social and Environment Impact : </strong>{" "}
            {data.socialAndEnvironmentImpact}
          </div>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <BsFillPhoneVibrateFill className="text-3xl" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    {data.details.phone}
                  </h2>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <AiOutlineMail className="text-3xl" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    {data.details.email}
                  </h2>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <CiLocationOn className="text-3xl" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    {data.details.address}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Frequently asked questions
              </h2>
              <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                {data.faqs.map((e) => {
                  return (
                    <>
                      <div class="mb-10">
                        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                          <svg
                            class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          {e.question}
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">
                          {e.answer}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <section class="text-gray-600 body-font">
          {confirm ? (
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Contact Us
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Enter your phone no and email id we will contact you soon...
                </p>
              </div>
              <div class="flex lg:w-3/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Phono no.
                  </label>
                  <input
                    onChange={onchange}
                    value={contact.phone}
                    type="number"
                    id="full-name"
                    name="phone"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative flex-grow w-full">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    onChange={onchange}
                    value={contact.email}
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  onClick={submit}
                  class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <>
              <div
                class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong class="font-bold">Thanks for contact us - </strong>
                <span class="block sm:inline">we will contact you soon...</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    class="fill-current h-6 w-6 text-black-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default Page;
