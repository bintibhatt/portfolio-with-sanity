import Image from "next/image";

const Hero = () => {
  return (
    <section className="main_div h-lvh relative bg-gray-800 text-white py-24 md:py-32 lg:py-48">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative z-10 max-w-md mx-auto">
          <h1 className="text-5xl font-bold mb-4">Binti Bhatt</h1>
          <p className="text-lg font-medium">
            Showcase of my skills and experience
          </p>
          <a
            href="/projects"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Explore my Projects
          </a>
        </div>

        <div className="absolute inset-0 z-0">
          <Image
            src="/path/to/your/hero-image.jpg"
            alt="Portfolio Hero Image"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
