import Navbar from "@/components/navbar";
import React from "react";
import { FcReuse } from "react-icons/fc";
import { BsRecycle } from "react-icons/bs";
import { DiComposer } from "react-icons/di";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
function Page() {
  return (
    <>
      <Navbar />

      <section class="text-gray-600 body-font overflow-hidden mt-40 mb-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://www.themetechmount.com/wordpress/wastii/wp-content/uploads/2022/04/single-img-05.jpg"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Why we need waste management ?
              </h1>

              <p class="leading-relaxed mt-10">
                Waste management is essential for several compelling reasons.
                Firstly, it helps protect the environment by reducing pollution,
                minimizing the release of hazardous substances, and preventing
                the contamination of air, water, and soil. Secondly, effective
                waste management promotes public health and safety by preventing
                the spread of diseases, controlling pests, and managing
                potentially harmful materials. Thirdly, it conserves valuable
                resources by promoting recycling, reusing materials, and
                recovering energy from waste. Additionally, proper waste
                management supports a sustainable economy by creating employment
                opportunities, fostering innovation in waste reduction
                technologies, and reducing the need for raw materials.
                Ultimately, waste management is crucial for preserving our
                planet for future generations and creating a cleaner, healthier,
                and more sustainable world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Problem of too much waste ?
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Consumption and Production Patterns
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    As our population and economy grow, there is an increased
                    demand for goods and services. This leads to higher levels
                    of production and consumption, resulting in more waste being
                    generated.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Packaging and Single-Use Items
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Use Items: The use of packaging materials, especially
                    single-use plastics, contributes significantly to waste
                    generation. Convenience-driven consumption habits and the
                    prevalence of disposable products contribute to the
                    accumulation of waste.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FcReuse className="text-xl" />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Lack of Awareness and Education
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Insufficient knowledge about the impact of waste and
                    inadequate waste management practices can lead to improper
                    disposal and increased waste generation. Lack of awareness
                    about recycling, composting, and sustainable waste
                    management practices also plays a role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              How we can solve it ?
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FcReuse className="text-xl" />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Reduce and Reuse
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Emphasize the importance of reducing waste at the source by
                    adopting a minimalist approach, purchasing durable and
                    long-lasting products, and opting for reusable items instead
                    of disposables. Encourage practices such as repairing,
                    repurposing, and sharing items to extend their lifespan.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <BsRecycle className="text-xl" />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Recycling
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Promote recycling initiatives by educating communities about
                    proper sorting and recycling practices. Implement convenient
                    recycling programs, provide recycling bins, and collaborate
                    with recycling facilities to ensure effective waste
                    diversion from landfills.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <DiComposer className="text-xl" />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Composting
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Encourage composting of organic waste, such as food scraps
                    and yard trimmings, to reduce landfill burden and create
                    nutrient-rich soil. Provide resources and education on home
                    composting techniques and support community composting
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <MdOutlineCastForEducation className="text-xl" />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Education and Awareness
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Promote waste management awareness campaigns targeting
                    individuals, schools, and businesses to raise consciousness
                    about waste-related issues. Highlight the importance of
                    responsible waste disposal, recycling, and sustainable
                    practices.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <MdOutlinePolicy className="text-xl" />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Policy and Regulation
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Governments play a crucial role in implementing and
                    enforcing waste management policies and regulations. Develop
                    comprehensive waste management plans, enforce waste
                    reduction targets, and provide incentives for sustainable
                    practices. Encourage the development of a circular economy
                    through supportive policies.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaExchangeAlt className="text-xl" />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Behavioral Change
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Encourage individuals and businesses to adopt responsible
                    waste management behaviors through awareness campaigns,
                    incentives, and education. Foster a cultural shift towards
                    sustainability, where waste reduction and resource
                    conservation are prioritized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
