import Navbar from "../components/Navbar";

export default function AboutLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div div className="bg-[url('/assets/images/hero-bg.jpg')] bg-cover">
      <section className=" bg-gray-900 h-screen py-20 px-40 bg-opacity-70 ">
        <div className="container rounded-3xl mx-auto mt-16 border-white border-2 ">
          <Navbar />
          {children}
        </div>
      </section>
    </div>
  );
}
