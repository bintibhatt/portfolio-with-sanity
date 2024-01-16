import Image from "next/image";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="h-screen">
      <Navbar className="absolute z-50" />
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 lg:py-48">
        <div className="relative z-20 max-w-sm my-28 mx-auto">
          <h1 className="text-5xl font-bold tracking-tight my-10 text-center">
            Binti Bhatt
          </h1>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold mr-2">Num+</span>
            <p className="text-base font-medium">Test</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold mr-2">Num+</span>
            <p className="text-base font-medium">Test test test</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <button className="text-white px-4 py-2 rounded-md hover:bg-slate-500 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Explore my Projects
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
