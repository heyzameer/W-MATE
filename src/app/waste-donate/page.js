"use client";
import Navbar from "@/components/navbar";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { z } from "zod";


const wasteSchema = z.object({
  wasteType: z.string().min(2, { message: "Waste type must be at least 2 characters long." }).max(50, { message: "Waste type must not exceed 50 characters." }).nonempty({ message: "Waste type must not be empty." }),
  wasteDesc: z.string().min(10, { message: "Waste description must be at least 10 characters long." }).max(500, { message: "Waste description must not exceed 500 characters." }).nonempty({ message: "Waste description must not be empty." }),
  quantity: z.string().regex(/^\d+$/, { message: "Quantity must be a valid number." }).nonempty({ message: "Quantity must not be empty." }),
  location: z.string().nonempty({ message: "Location must not be empty." }),
  contactPhone: z.string().min(10, { message: "Phone number must be at least 10 digits long." }).max(10, { message: "Phone number must be exactly 10 digits long." }).nonempty({ message: "Phone number must not be empty." }),
  contactEmail: z.string().email({ message: "Invalid email format." }).nonempty({ message: "Email must not be empty." }),
  sellingPrice: z.string().regex(/^\d+$/, { message: "Selling price must be a valid number." }).nonempty({ message: "Selling price must not be empty." }),
  additionalInformation: z.string().nonempty({ message: "Additional information must not be empty." }),
});

function Page() {
  const [confirm, setConfirm] = useState(true);
  const [details, setDetails] = useState({
    wasteType: "",
    wasteDesc: "",
    quantity: "",
    location: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    sellingPrice: "",
    additionalInformation: "",
  });

  const onchange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submit = () => {
    try {
      wasteSchema.parse(details);
      const dbInstance = collection(db, `wasteDonate`);
      addDoc(dbInstance, details)
        .then(() => {
          setConfirm(false);
          setDetails({
            wasteType: "",
            wasteDesc: "",
            quantity: "",
            location: "",
            contactPerson: "",
            contactEmail: "",
            contactPhone: "",
            sellingPrice: "",
            additionalInformation: "",
          });
          setTimeout(() => {
            setConfirm(true);
          }, 3000); // 3 seconds delay
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      alert(error.errors[0].message);
    }
  };



  const user = useAuthState(auth)?.[0];
  console.log(user);
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font mt-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Want to donate or sell waste ?
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              At our service, we go beyond waste management by offering you the
              opportunity to make a difference through waste donation. Please
              fill below form
            </p>
          </div>
        </div>
      </section>

      {confirm ? (
        <>
          <section className="container px-4 mx-auto max-w-4xl">
            <div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  onChange={onchange}
                  type="text"
                  name="wasteType"
                  id="floating_text"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="                    Plastic, Domestic, Compost, etc."
              required
                />
                <label
                  for="floating_text"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Waste type
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  onChange={onchange}
                  type="text"
                  name="wasteDesc"
                  id="floating_text"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_text"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Waste description
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  onChange={onchange}
                  type="number"
                  name="quantity"
                  id="floating_repeat_text"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_repeat_text"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Quantity
                </label>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    onChange={onchange}
                    type="text"
                    name="contactPerson"
                    id="contactPerson"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="contactPerson"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Contact person name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    onChange={onchange}
                    type="text"
                    name="contactEmail"
                    id="contactEmail"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="contactEmail"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Contact email
                  </label>
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    onChange={onchange}
                    type="number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="contactPhone"
                    id="contactPhone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="contactPhone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone no.
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    onChange={onchange}
                    type="number"
                    name="sellingPrice"
                    id="sellingPrice"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="sellingPrice"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Selling price
                  </label>
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    onChange={onchange}
                    type="test"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="additionalInformation"
                    id="contactPhone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="contactPhone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    additiona information
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    onChange={onchange}
                    type="text"
                    name="location"
                    id="sellingPrice"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="sellingPrice"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Address
                  </label>
                </div>
              </div>
              {user ? (
                <>
                  <button
                    onClick={submit}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <>
                  <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Please login
                  </button>
                </>
              )}
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="max-w-3xl container mx-auto">
            <div
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">Thanks for the waste - </strong>
              <span class="block sm:inline">
                someone will contact you soon...
              </span>
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
          </section>
        </>
      )}
    </>
  );
}

export default Page;


  // const onchange = (e) => {
  //   setDetails({ ...details, [e.target.name]: e.target.value });
  // };
  // const submit = () => {
  //   const dbInstance = collection(db, `wasteDonate`);
  //   addDoc(dbInstance, details)
  //     .then(() => {
  //       setConfirm(!confirm);
  //       setContact({
  //         wasteType: "",
  //         wasteDesc: "",
  //         quantity: "",
  //         location: "",
  //         contactPerson: "",
  //         contactEmail: "",
  //         contactPhone: "",
  //         sellingPrice: "",
  //         additionalInformation: "",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };