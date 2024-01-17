import React from "react";
import Navbar from "./Navbar";
import { createClient } from "next-sanity";
import Link from "next/link";
import AchievementsPage from "./AchievementsComp";
import HorizontalAccordion from "./HorizontalAccordian";
import AboutComp from "./AboutComp";

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
    <section className="bg-gray-800 h-screen py-28 px-48">
      <div className="flex h-full rounded-lg bg-gray-600 p-20">
        <HorizontalAccordion>
          <AboutComp />
        </HorizontalAccordion>
      </div>
    </section>
  );
}
