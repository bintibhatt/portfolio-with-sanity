import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-fit">
      <div className="container mx-auto px-4 md:px-8 py-10 md:pt-20 lg:pt-32 max-w-screen-xl">
        <div className="relative z-20 my-36 2xl:mx-auto 2xl:mr-96 xl:mt-40 lg:ml-20 lg:mr-96 md:ml-10 md:my-24 md:mr-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight my-5 text-center  flex justify-center">
            Binti Bhatt
          </h1>
          <div className="flex items-center justify-center md:justify-center">
            <span className="text-xl md:text-3xl font-bold mr-2">
              WebTech | AI-ML Enthusiast
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-center mt-5 md:mt-7">
            <span className="text-xl md:text-3xl font-bold mr-2">640+</span>
            <p className="text-sm md:text-base font-medium md:mr-5">
              Hours of Coding
            </p>
            <span className="text-xl md:text-3xl font-bold mr-2">5+</span>
            <p className="text-sm md:text-base font-medium">
              Projects Completed
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-5">
            <button className="text-white px-4 py-2 rounded-md bg-slate-500 bg-opacity-70 hover:bg-slate-700 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md">
              <Link href="/about">Know more about me!</Link>
            </button>
            <p className="text-2xl mx-5"></p>
            <button className="text-white px-4 py-2 rounded-md bg-slate-500 bg-opacity-70 hover:bg-slate-700 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md">
              <Link href="/about/contact">Contact Me!</Link>
            </button>
          </div>
        </div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="Portfolio Hero Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
