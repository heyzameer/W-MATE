"use client";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useParams } from "next/navigation";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import PageNotFound from "@/components/404";
function Page() {
  const [contact, setContact] = useState({ phone: "", email: "" });
  const [confirm, setConfirm] = useState(true);
  const onchange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const { slug } = useParams();
  const submit = async () => {
    const dbInstance = collection(db, `companies/${slug}/contact`);
    addDoc(dbInstance, contact)
      .then(() => {
        setConfirm(!confirm);
        setContact({ phone: "", email: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   const router = useRouter();

  console.log(slug);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const snap = await getDoc(doc(db, "wasteDonate", `${slug}`));

      if (snap.exists()) {
        console.log(snap.data());
        setData(snap.data());
      } else {
        console.log("No such document");
      }
    }
    getData();
  }, []);
  //   const slug = "Adfasd";
  //   const [snapshot, loading, error] = useCollection(
  //     collection(db, "companies", `/${slug}`)
  //   );
  //   const company = snapshot?.docs?.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   console.log(company);
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
          <h1 className="text-2xl font-bold">{data.wasteType}</h1>
          {/* <p className="text-gray-600">{data.wasteDesc}</p> */}
        </div>
        <div>
          <p>{data.wasteDesc}</p>
          <div className="mt-4">
            <strong>Quantity : </strong> {data.quantity}
          </div>
          <div className="mt-4">
            <strong>Price : </strong>{" "}
            {data.sellingPrice == 0 ? "Free" : data.sellingPrice + "$"}
          </div>
          <div className="mt-4">
            <strong>Location: </strong> {data.location}
          </div>
          <div className="mt-4">
            <strong>Additional info: </strong> {data.additionalInformation}
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
                    {data.contactPhone}
                  </h2>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <AiOutlineMail className="text-3xl" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    {data.contactEmail}
                  </h2>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <BsFillPersonLinesFill className="text-3xl" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    {data.contactPerson}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div></div>
      </div>
    </>
  );
}

export default Page;
