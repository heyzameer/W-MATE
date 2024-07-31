"use client";
import { string, object } from 'zod';

import Navbar from "@/components/navbar";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase/firebaseConfig";

const contactSchema = object({
  name: string().min(5, { message: 'Name must be at least 2 characters long' }),
  email: string().email({ message: 'Invalid email format' }),
  message: string().min(5, { message: 'Message must be at least 10 characters long' }),
});


function Page() {
  const [confirm, setConfirm] = useState(false);
  const [contact, setContact] = useState({ email: "", name: "", message: "" });
  const onchange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submit = () => {
    const validationResult = contactSchema.safeParse(contact);
  
    if (validationResult.success) {
      const dbInstance = collection(db, "contact");
      addDoc(dbInstance, { ...contact, date: serverTimestamp() })
        .then(() => {
          setContact({ email: "", name: "", message: "" });
          setConfirm(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let errorMessage = "";
      validationResult.error.errors.forEach((error) => {
        switch (error.path) {
          case "name":
            errorMessage += "Name must be at least 2 characters long.\n";
            break;
          case "email":
            errorMessage += "Invalid email format.\n";
            break;
          case "message":
            errorMessage += "Message must be at least 10 characters long.\n";
            break;
          default:
            errorMessage += "Invalid email or user name.\n";
        }
      });
      alert(errorMessage);
    }
  };
  
  

// function Page() {
//   const [confirm, setConfirm] = useState(false);
//   const [contact, setContact] = useState({ email: "", name: "", message: "" });
//   const onchange = (e) => {
//     setContact({ ...contact, [e.target.name]: e.target.value });
//   };
//   const submit = () => {
//     const dbInstance = collection(db, "contact");
//     addDoc(dbInstance, { ...contact, date: serverTimestamp() })
//       .then((res) => {
//         setContact({ email: "", name: "", message: "" });
//         setConfirm(!confirm);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font mt-40 mb-20 relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7695.98253769993!2d74.74847604557075!3d15.32270964932819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf266a5df844e3%3A0x1cd14e5a443ec23c!2sKLS%20Vishwanathrao%20Deshpande%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1708969313110!5m2!1sen!2sin"
              //   style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                  KLS VDIT HALIYAL
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact form
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              If you want to contact our team fill this form
            </p>
            {confirm ? (
              <>
                <div
                  class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong class="font-bold">Thank you - </strong>
                  <span class="block sm:inline">
                    someone will contact you soon...
                  </span>
                  <span
                    onClick={() => {
                      setConfirm(!confirm);
                    }}
                    class="absolute top-0 bottom-0 right-0 px-4 py-3"
                  >
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
            ) : (
              <></>
            )}
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                value={contact.name}
                onChange={onchange}
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                value={contact.email}
                onChange={onchange}
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                value={contact.message}
                onChange={onchange}
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              onClick={submit}
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
            <p class="text-xs text-gray-500 mt-3">
              {/* test sentence */}
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://avatar.iran.liara.run/public/boy?"
                />
                <p class="leading-relaxed"></p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Zameer Ahmed
                </h2>
                {/* <p class="text-gray-500">CTO</p> */}
              </div>
            </div>
            <div class="lg:w-1/4 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://avatar.iran.liara.run/public/girl?username=prerana"
                />
                <p class="leading-relaxed"></p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Prerana Patil
                </h2>
                {/* <p class="text-gray-500">CTO</p> */}
              </div>
            </div>
            <div class="lg:w-1/4 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://avatar.iran.liara.run/public/girl?username=megha"
                />
                <p class="leading-relaxed"></p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Megha
                </h2>
                {/* <p class="text-gray-500">CTO</p> */}
              </div>
            </div>
            <div class="lg:w-1/4 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://avatar.iran.liara.run/public/girl?username=smita"
                />
                <p class="leading-relaxed"></p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Smita Patil
                </h2>
                {/* <p class="text-gray-500">CTO</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;


// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7695.98253769993!2d74.74847604557075!3d15.32270964932819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf266a5df844e3%3A0x1cd14e5a443ec23c!2sKLS%20Vishwanathrao%20Deshpande%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1708969313110!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>