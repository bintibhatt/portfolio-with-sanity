import React from "react";
import { createClient } from "next-sanity";
import Link from "next/link";

export default async function AboutPage() {
  const client = createClient({
    projectId: "qb0ilyn2",
    dataset: "production",
    useCdn: false,
  });

  const about = await client.fetch(`*[_type == "about"] `, {
    cache: "no-cache",
  });
  return (
    <div className="flex flex-col md:flex-row bg-gray-600 bg-opacity-60 p-8 md:p-10 lg:p-20 rounded-b-3xl">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-justify">
          <p>{about[0].about_me}</p>
          <p>{about[0].about_study}</p>
          <p>{about[0].about_extra}</p>
        </div>

        <div className="mt-6 md:mt-8">
          <Link
            href="/about/contact"
            className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium bg-gray-400 text-black rounded-md hover:bg-gray-800 hover:text-white"
          >
            Get in touch &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
}
