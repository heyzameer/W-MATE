import Navbar from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import MyComponent  from "@/components/GoogleTranslate";
// import ChatBotButton from "@/components/ChatBot";

export default function Home() {


  return (
    <>
      <Head>
        <title>Waste Manage</title>
      </Head>
      <Navbar />
      <section class="text-gray-600 container mx-auto md:mt-20 mt-10 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Empowering a cleaner,
              <br class="hidden lg:inline-block" />
              greener tomorrow, together.
            </h1>
            <p class="mb-8 leading-relaxed">
              Welcome to our waste management website, where we strive to make a
              positive impact on our environment. Explore our comprehensive
              resources and innovative solutions designed to tackle
              waste-related challenges head-on. From recycling tips to
              sustainable practices, we provide a one-stop platform for
              individuals and businesses to join the movement towards a cleaner,
              healthier planet. Join us in shaping a brighter future through responsible waste management.
            </p>


            <div class="flex justify-center">

            {/* <a href="https://mediafiles.botpress.cloud/3e50d59a-eeb3-47d3-a25f-843b525639d2/webchat/bot.html" target="_blank" rel="noopener noreferrer">

              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Chat Bot
              </button>
              </a>
               */}



              {/* <a href="https://mediafiles.botpress.cloud/3e50d59a-eeb3-47d3-a25f-843b525639d2/webchat/bot.html" target="_blank" rel="noopener noreferrer">

              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Waste Reducer</button>
              </a> */}
              
            </div>

          </div>
          <div class="lg:max-w-lg lg:w-full md:w-2/2 w-6/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://ph-static.z-dn.net/files/da8/559a2d2c3ce47809cd1dcb7b3f120de7.jpg"
            />
          </div>
        </div>
      </section>

      {/* Service Card start */}
      <section id="services" class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
              Our Services
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our service is dedicated to providing efficient and reliable waste
              management solutions tailored to your needs.
            </p>
          </div>
          <div class="flex flex-wrap items-center -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <Link href="/contact-with-companies">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full"
                    src="https://img.freepik.com/premium-psd/waste-management-poster-design-template_23-2149118631.jpg?w=2000"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      Contact With Companies
                    </div>
                    <p class="text-gray-700 text-base">
                      Cut out the middleman and connect directly with waste
                      management companies through our convenient service. Say
                      goodbye to the hassle of searching for reliable providers
                      - we streamline the process, allowing you to easily
                      communicate trusted professionals in the industry.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <Link href="/waste-donate">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full"
                    src="https://img.freepik.com/free-psd/waste-management-a4-poster-template_23-2149037843.jpg?w=2000"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Waste Donation</div>
                    <p class="text-gray-700 text-base">
                      At our service, we go beyond waste management by offering
                      you the opportunity to make a difference through waste
                      donation. Join us in our mission to minimize waste and
                      maximize impact by donating usable items and materials
                      that can benefit those in need.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <Link href="/waste-consumer">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full"
                    src="https://img.freepik.com/free-vector/environmental-agency-poster-with-information-waste-collection-sorting-recycling_1284-8959.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Eco Mart</div>
                    <p class="text-gray-700 text-base">
                      Discover a unique and innovative approach to waste management with our service, where you can buy waste materials for various purposes. Embrace the concept of upcycling and repurposing by acquiring recyclable or reusable waste products, promoting sustainability and
                      creativity.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <Link href="/waste-management-awarness">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full h-6/12"
                    src="https://img.freepik.com/free-psd/waste-management-poster-design-template_23-2149109684.jpg?w=2000"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      Waste Management Awarness
                    </div>
                    <p class="text-gray-700 text-base">
                      At our service, we believe in the power of waste
                      management awareness. We strive to educate and empower
                      individuals and organizations with valuable information,
                      tips, and resources to promote responsible waste
                      management practices.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Card End */}
    </>
  );
}
