"use client";
import Image from "next/image";
import Link from 'next/link';
import React, { useState, Suspense } from 'react';

// Define Spline using React.lazy as per official documentation
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Home() {
  const section2Text = "Stop thinking. Just chill.<br />In a world that never slows down, it's easy to forget that rest isn't a reward—it's a right.<br />You weren't made to rush from task to task, always planning, always pushing.<br />Life is softer than you think.<br />And it gets even better when you stop chasing and start breathing.";
  const section3Text1 = "Let the noise fade.<br />Let your shoulders drop.<br />Let comfort wrap around you like a favorite memory.";
  const section3Text2 = "Chillr is here.<br />With you, beside you, beneath you—supporting the life you\'re meant to live. Not the rushed one. The real one. The relaxed one.";
  const footerTopLeftText = "So sit back.<br />Chill.<br />And enjoy the life you\'re supposed to have.";

  // State for Section 3 left image
  const [activeLeftImageSec3, setActiveLeftImageSec3] = useState("/sec3_img.jpg");
  // State for Section 3 active chair details
  const [activeChairDetailsSec3, setActiveChairDetailsSec3] = useState({ title: "", description: "" });


  const chairsDataSec3 = [
    { src: "/sec3_chair1.svg", alt: "Chillr chair sketch 1", number: "1", detailImageSrc: "/sec3_img_chair1.jpg", title: "Black Lounge Chair", description: "Sink into modern sophistication. With its sleek, glossy frame and cushioned comfort, this chair wraps you in quiet luxury—perfect for unwinding in style." },
    { src: "/sec3_chair2.svg", alt: "Chillr chair sketch 2", number: "2", detailImageSrc: "/sec3_img_chair2.jpg", title: "White Barstool", description: "Light as air, bold in design. This translucent white barstool brings a clean, modern edge to any space—ideal for effortless, elevated living." },
    { src: "/sec3_chair3.svg", alt: "Chillr chair sketch 3", number: "3", detailImageSrc: "/sec3_img_chair3.jpg", title: "Pink Chaise Lounge", description: "Soft, elegant, and unapologetically unique. This pink chaise invites you to relax in its sculpted form, blending comfort and charm under a spotlight of beauty." },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <a href="mailto:jlstudio.xyz@gmail.com" className="border border-yellow-300 text-yellow-300 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors text-sm font-medium absolute right-18 md:relative md:right-0">
          Chair Together
        </a>
        <div className="md:hidden">

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-yellow-300 hover:text-yellow-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-lg py-2">
              <Link href="#about" className="block px-4 py-2 text-yellow-300 hover:text-yellow-400 transition-colors">about</Link>
              <Link href="#product" className="block px-4 py-2 text-yellow-300 hover:text-yellow-400 transition-colors">product</Link>
              <Link href="#contact" className="block px-4 py-2 text-yellow-300 hover:text-yellow-400 transition-colors">contact</Link>
            </div>
          )}
        </div>
      </nav>

      <section id="hero_space" className="h-[300vh]"></section>

      {/* Hero Section (Spline) */}
      <section id="hero" className="fixed inset-x-0 top-0 w-full h-screen pt-16 sm:pt-20">
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'black' }}><p style={{color: 'white'}}>Loading 3D Hero...</p></div>}>
          <Spline
            scene="https://prod.spline.design/gxqfOuFgM4EqoDxO/scene.splinecode"
            style={{ width: '100%', height: 'calc(100% - 4rem)', position: 'absolute', top: '0rem', left: 0 }}
          />
        </Suspense>
      </section>

      <div className="z-[1] bg-white hidden md:block">
        <div className="bg-black rounded-bl-[100px] rounded-br-[100px] w-100vw h-20"></div>
      </div>
      {/* Section 2 (Philosophy Text + Image) */}
      <section id="about" className="z-[1] py-0 md:py-16 px-0 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center bg-white text-black relative">
        
        <div className="z-[1] prose prose-lg max-w-[140px] text-gray-700 md:ml-[20%] text-yellow-300 md:text-black text-sm absolute top-30 left-10 font-bold md:relative md:top-0 md:left-0 md:font-normal">
          <p className="leading-[1.2]" dangerouslySetInnerHTML={{ __html: section2Text }} />
        </div>
        <div className="relative w-full h-[100vh] md:h-[90vh] md:aspect-[4/3] overflow-hidden">
          <video
            src="/sec2_video.mp4"
            className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 object-cover"
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
      <section id="product" className="z-[2] mb-[-1px] pt-0 md:pt-20 pb-12 sm:pb-16 py-0 md:py-16 px-0 md:px-16 lg:px-24 grid md:grid-cols-2 gap-12 md:gap-[4%] items-start bg-white text-black">
        <div className="flex flex-col gap-8 relative">
          <div className="relative w-[100vw] md:w-full h-[100vh] md:h-[90vh] aspect-[16/10] overflow-hidden">
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
          {/* Desktop: Text shown on hover */}
          <div className="absolute top-12 left-10 max-w-[250px] md:max-w-[unset] md:top-auto md:bottom-12 left-8 right-8 md:grid sm:grid-cols-2 gap-6 text-sm sm:text-base font-bold">
            {/* Left Column */}
            <div>
              {activeLeftImageSec3 !== "/sec3_img.jpg" && activeChairDetailsSec3.title ? (
                <h3 className={`text-lg font-semibold mb-2 ${activeChairDetailsSec3.title === chairsDataSec3[2].title ? 'text-white' : ''}`}>
                  {activeChairDetailsSec3.title}
                </h3>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: section3Text1 }} />
              )}
            </div>
            {/* Right Column */}
            <div>
              {activeLeftImageSec3 !== "/sec3_img.jpg" && activeChairDetailsSec3.description ? (
                <p className={`${activeChairDetailsSec3.title === chairsDataSec3[2].title ? 'text-white' : ''}`}>
                  {activeChairDetailsSec3.description}
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: section3Text2 }} />
              )}
            </div>
          </div>
        </div>
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 pt-0 md:pt-32 md:pl-8 gap-4 px-8"
          onMouseLeave={() => {
            setActiveLeftImageSec3("/sec3_img.jpg");
            setActiveChairDetailsSec3({ title: "", description: "" });
          }}
        >
          {chairsDataSec3.map((chair) => (
            <div key={chair.number} className="md:hidden mb-8">
              <div className="flex flex-row gap-4 justify-around">
                <div className="relative w-50 h-70 sm:w-36 sm:h-52 cursor-pointer group">                 
                  <Image
                    src={chair.src}
                    alt={chair.alt}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    className="p-2 relative z-10"
                  />
                </div>
                <div className="relative w-50 h-70 sm:w-36 sm:h-52 cursor-pointer group">
                  <Image
                    src={chair.detailImageSrc}
                    alt={chair.alt + " detail"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold mb-1">{chair.title}</h3>
                <p className="text-sm">{chair.description}</p>
              </div>
            </div>
          ))}
          {/* Desktop chair selectors */}
          {chairsDataSec3.map((chair) => (
            <div 
              key={chair.number + '-desktop'} 
              className={`hidden md:block relative w-32 h-32 sm:w-40 sm:h-40 ${
                chair.number === '1' ? 'md:w-64 md:h-50' :
                chair.number === '2' ? 'md:w-64 md:h-90 ml-[50%]' :
                chair.number === '3' ? 'md:w-90 md:h-75 mt-[-100]' :
                'md:w-72 md:h-84'
              } p-4 cursor-pointer group`}
              onMouseEnter={() => {
                setActiveLeftImageSec3(chair.detailImageSrc);
                setActiveChairDetailsSec3({ title: chair.title, description: chair.description });
              }}
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
      <section id="interactive" className="z-[1] h-screen w-full hidden lg:block">
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

      {/* Section 4 - Mobile specific content */}
      <section id="sec4-mobile" className="lg:hidden z-[1] w-full flex flex-col items-center justify-center bg-white pt-24 pb-48 px-6 sm:px-8">
        <div className="mb-8 sm:mb-12">
          <Image
            src="/logo.svg"
            alt="Chillr Logo"
            width={243} 
            height={83} 
            className="invert"
            priority
          />
        </div>
        <div className="w-full max-w-md sm:max-w-lg"> 
          <Image
            src="/sec4_mobile_img.jpg" 
            alt="Chillr Brand Applications"
            width={1035} 
            height={345} 
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </section>

      <div className="z-[1] bg-white">
        <div className="bg-black rounded-tl-[100px] rounded-tr-[100px] w-100vw h-20"></div>
      </div>

      {/* Footer (Spline) */}
      <footer id="contact" className="z-[1] h-[90vh] min-h-[350px] sm:h-[60vh] w-full relative bg-black pl-16 pt-16 sm:pt-200">
        <div className="absolute top-0 left-10 sm:left-8 md:left-16 lg:left-24 z-10">
          <Image
            src="/logo.svg"
            alt="Chillr Logo"
            width={150}
            height={48}
            className="filter"
            priority
          />
          
          <p className="text-lg sm:text-xl text-yellow-300 max-w-[300px] leading-[1.2] mt-4 mb-8" dangerouslySetInnerHTML={{ __html: footerTopLeftText }}/>
          <a href="mailto:jlstudio.xyz@gmail.com" className="border border-yellow-300 text-yellow-300 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors text-sm font-medium">
            Chair Together
          </a>
        </div>
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'black' }}><p style={{color: 'white'}}>Loading 3D Footer...</p></div>}>
          <Spline
            scene="https://prod.spline.design/82IsOFsX56iulNIm/scene.splinecode"
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
          />
        </Suspense>
        <div className="absolute bottom-8 left-0 right-8 text-right pointer-events-none z-10">
          <p className="text-xs text-yellow-300">&copy; {new Date().getFullYear()} Chillr. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
