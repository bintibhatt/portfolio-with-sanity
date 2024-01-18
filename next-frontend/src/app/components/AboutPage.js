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

  console.log(about);
  return (
    <div className="flex h-full bg-gray-600 p-20 rounded-b-3xl">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-justify">
          <p>{about[0].about_me}</p>
          <p>{about[0].about_study}</p>
          <p>{about[0].about_extra}</p>
        </div>

        <div className="mt-8">
          <Link
            href="/about/contact"
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-500 text-black rounded-md hover:bg-gray-800 hover:text-white"
          >
            Get in touch &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
}
