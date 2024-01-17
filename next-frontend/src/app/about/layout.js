import Navbar from "../components/Navbar";

export default function AboutLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="bg-gray-800 h-screen py-20 px-40">
      <div className="container mx-auto py-20 md:py-10 rounded-lg ">
        <Navbar />
        {children}
      </div>
    </section>
  );
}
