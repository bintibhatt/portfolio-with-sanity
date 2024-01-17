import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-fit">
      <Navbar className="absolute z-50" />
      <div className="container mx-auto px-4 md:px-8 py-20 md:pt-32 lg:pt-48">
        <div className="relative z-20 my-28 mx-auto mr-48">
          <h1 className="text-5xl font-bold tracking-tight my-5 text-center">
            Binti Bhatt
          </h1>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold mr-2">
              WebTech | AI-ML Enthusiast
            </span>
          </div>
          <div className="flex items-center justify-center mt-7">
            <span className="text-3xl font-bold mr-2">640+</span>
            <p className="text-base font-medium">Hours of Coding</p>
            <p className="text-3xl mx-7">|</p>
            <span className="text-3xl font-bold mr-2">5+</span>
            <p className="text-base font-medium">Projects Completed</p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span className="text-3xl font-bold mr-2">
              Alpha MLSA | Github Global Campus Student
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-5">
            <button className="text-white px-4 py-2 rounded-md bg-slate-500 bg-opacity-50 hover:bg-slate-500 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md">
              <Link href="/projects">Explore my Projects</Link>
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
