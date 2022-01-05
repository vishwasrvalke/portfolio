import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const [sideBar, setSideBar] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window?.innerWidth
  );
  const [height, setHeight] = useState(
    typeof window !== "undefined" && window?.innerHeight
  );
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  useEffect(() => {
    if (width > 700) {
      setSideBar(false);
    }
  }, [height, width]);
  const meta = {
    title: "Vishwas R Valke - Developer",
    description: `I've been developing websites for 3 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Vishwas R Valke" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vishwasrv" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="max-w-full dark:bg-gray-800">
        <div className="flex flex-col float-left mt-14 px-7">
          {sideBar ? (
            <>
              <button
                className="ml-80 focus:outline-none md:hidden"
                onClick={() => setSideBar(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                </svg>
              </button>
              <Link href="/">
                <a
                  onClick={() => setSideBar(false)}
                  className="text-base mb-2 font-bold  text-gray-600 dark:text-gray-300"
                >
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a
                  onClick={() => setSideBar(false)}
                  className="text-base font-bold mb-2 text-gray-600 dark:text-gray-300"
                >
                  About
                </a>
              </Link>
              <Link href="/projects">
                <a
                  onClick={() => setSideBar(false)}
                  className="text-base font-bold mb-2 text-gray-600 dark:text-gray-300"
                >
                  Projects
                </a>
              </Link>
              <Link href="/experience">
                <a
                  onClick={() => setSideBar(false)}
                  className="text-base font-bold mb-2 text-gray-600 dark:text-gray-300"
                >
                  Experience
                </a>
              </Link>
              <Link href="/contact">
                <a
                  onClick={() => setSideBar(false)}
                  className="text-base font-bold mb-2 text-gray-600 dark:text-gray-300"
                >
                  Contact
                </a>
              </Link>
            </>
          ) : (
            <button
              className="focus:outline-none md:hidden"
              onClick={() => setSideBar(true)}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
        {!sideBar && (
          <>
            <Navbar />
            <div className="dark:bg-[#293241]">{children}</div>
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}
