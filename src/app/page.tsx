"use client";
import Image from "next/image";
import Spline from '@splinetool/react-spline/';
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
  const section2Text = "Stop thinking. Just chill.<br />In a world that never slows down, it's easy to forget that rest isn't a reward—it's a right.<br />You weren't made to rush from task to task, always planning, always pushing.<br />Life is softer than you think.<br />And it gets even better when you stop chasing and start breathing.";
  const section3Text1 = "Let the noise fade.<br />Let your shoulders drop.<br />Let comfort wrap around you like a favorite memory.";
  const section3Text2 = "Chillr is here.<br />With you, beside you, beneath you—supporting the life you're meant to live. Not the rushed one. The real one. The relaxed one.";
  const footerTopLeftText = "So sit back.<br />Chill.<br />And enjoy the life you\'re supposed to have.";

  // State for Section 3 left image
  const [activeLeftImageSec3, setActiveLeftImageSec3] = useState("/sec3_img.jpg");

  const chairsDataSec3 = [
    { src: "/sec3_chair1.svg", alt: "Chillr chair sketch 1", number: "1", detailImageSrc: "/sec3_img_chair1.jpg" },
    { src: "/sec3_chair2.svg", alt: "Chillr chair sketch 2", number: "2", detailImageSrc: "/sec3_img_chair2.jpg" },
    { src: "/sec3_chair3.svg", alt: "Chillr chair sketch 3", number: "3", detailImageSrc: "/sec3_img_chair3.jpg" },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-black text-white font-sans">

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md shadow-lg py-3 px-6 sm:px-8 md:px-16 lg:px-24 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Chillr Logo"
            width={100}
            height={24}
            className="filter"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-yellow-300 hover:text-yellow-400 transition-colors">about</Link>
          <Link href="#product" className="text-yellow-300 hover:text-yellow-400 transition-colors">product</Link>
          <Link href="#contact" className="text-yellow-300 hover:text-yellow-400 transition-colors">contact</Link>
        </div>
        <button className="border border-yellow-300 text-yellow-300 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors text-sm font-medium">
          Chair Together
        </button>
        <div className="md:hidden">
          {/* You can add a hamburger icon here and logic for a mobile menu */}
        </div>
      </nav>

      <section id="hero_space" className="h-[300vh]"></section>

      {/* Hero Section (Spline) */}
      <section id="hero" className="fixed inset-x-0 top-0 w-full h-screen pt-16 sm:pt-20">
        <Spline
          scene="https://prod.spline.design/gxqfOuFgM4EqoDxO/scene.splinecode"
          style={{ width: '100%', height: 'calc(100% - 4rem)', position: 'absolute', top: '0rem', left: 0 }}
        />
      </section>

      <div className="z-[1] bg-white">
        <div className="bg-black rounded-bl-[100px] rounded-br-[100px] w-100vw h-20"></div>
      </div>
      {/* Section 2 (Philosophy Text + Image) */}
      <section id="about" className="z-[1] pt-16 sm:pt-20 pb-12 sm:pb-16 px-6 sm:px-8 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center bg-white text-black">
        
        <div className="prose prose-lg max-w-[140px] text-gray-700 md:ml-32 text-sm ">
          <p className="leading-[1.2]" dangerouslySetInnerHTML={{ __html: section2Text }} />
        </div>
        <div className="relative w-full h-72 sm:h-96 md:h-[940px] md:aspect-[4/3] overflow-hidden">
          <video
            src="/sec2_video.mp4"
            className="absolute top-1/2 left-0 w-full -translate-y-1/2"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Section 3 (Brand Signage + Chair Sketches) */}
      <section id="product" className="z-[2] mb-[-1px] pt-16 sm:pt-20 pb-12 sm:pb-16 px-6 sm:px-8 md:px-16 lg:px-24 grid md:grid-cols-2 gap-12 md:gap-16 items-start bg-white text-black">
        <div className="flex flex-col gap-8 sticky top-24">
          <div className="relative w-full md:h-[940px] aspect-[16/10] overflow-hidden">
            <Image
              key={activeLeftImageSec3}
              src={activeLeftImageSec3}
              alt="Chillr brand signage or selected chair"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
          <div className="absolute bottom-12 left-8 right-8 grid sm:grid-cols-2 gap-6 text-sm sm:text-base font-bold">
            <p 
              className={`transition-opacity duration-100 ${activeLeftImageSec3 !== "/sec3_img.jpg" ? "opacity-0" : "opacity-100"}`}
              dangerouslySetInnerHTML={{ __html: section3Text1 }} 
            />
            <p 
              className={`transition-opacity duration-100 ${activeLeftImageSec3 !== "/sec3_img.jpg" ? "opacity-0" : "opacity-100"}`}
              dangerouslySetInnerHTML={{ __html: section3Text2 }} 
            />
          </div>
        </div>
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 pt-0 md:pt-32 md:pl-8"
          onMouseLeave={() => setActiveLeftImageSec3("/sec3_img.jpg")}
        >
          {chairsDataSec3.map((chair) => (
            <div 
              key={chair.number} 
              className={`relative w-32 h-32 sm:w-40 sm:h-40 ${
                chair.number === '1' ? 'md:w-64 md:h-50' :
                chair.number === '2' ? 'md:w-64 md:h-90 mt-40' :
                chair.number === '3' ? 'md:w-90 md:h-75 mt-[-100]' :
                'md:w-72 md:h-84'
              } p-4 cursor-pointer group`}
              onMouseEnter={() => setActiveLeftImageSec3(chair.detailImageSrc)}
            >
              <span className="absolute top-0 left-0 text-xs sm:text-sm font-semibold text-white bg-black backdrop-blur-sm px-1.5 py-0.5 rounded-full w-6 h-6 flex items-center justify-center ml-[10px] mt-[-40px]">
                {chair.number}
              </span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-yellow-300 rounded-full opacity-80 group-hover:w-32 group-hover:h-32 transition-all duration-300 ease-out"></div>
              <Image
                src={chair.src}
                alt={chair.alt}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
                className="p-2 relative z-10"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 (Spline Embed iframe) */}
      <section id="interactive" className="z-[1] h-screen w-full">
        <div className="w-full h-full">
          <iframe
            src="https://my.spline.design/untitled-0f3EYsjnmYyxNNOZkKQSZZSA-TSR/"
            width="100%"
            height="100%"
            loading="lazy"
            title="Interactive Spline Scene - Chillr"
          ></iframe>
        </div>
      </section>

      <div className="z-[1] bg-white">
        <div className="bg-black rounded-tl-[100px] rounded-tr-[100px] w-100vw h-20"></div>
      </div>

      {/* Footer (Spline) */}
      <footer id="contact" className="z-[1] h-[50vh] min-h-[350px] w-full relative bg-black pt-16 sm:pt-200">
        <div className="absolute top-0 left-6 sm:left-8 md:left-16 lg:left-24 z-10 pointer-events-none">
          <Image
            src="/logo.svg"
            alt="Chillr Logo"
            width={150}
            height={48}
            className="filter"
            priority
          />
          
          <p className="text-lg sm:text-xl text-yellow-300 max-w-[300px] leading-[1.2] mt-4 mb-8" dangerouslySetInnerHTML={{ __html: footerTopLeftText }}/>
          <button className="border border-yellow-300 text-yellow-300 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors text-sm font-medium">
            Chair Together
          </button>
        </div>
        <Spline
          scene="https://prod.spline.design/82IsOFsX56iulNIm/scene.splinecode"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <div className="absolute bottom-8 left-0 right-8 text-right pointer-events-none z-10">
          <p className="text-xs text-yellow-300">&copy; {new Date().getFullYear()} Chillr. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
