import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Home() {
  const section2Text = "Stop thinking. Just chill. In a world that never slows down, it's easy to forget that rest isn't a reward—it's a right. You weren't made to rush from task to task, always poisoning, always pushing. Life is softer than you think. And it gets even softer when you stop chasing and start breathing.";
  const section3Text1 = "Let the noise fade. Let your shoulders drop. Let comfort wrap around you like a favorite memory.";
  const section3Text2 = "Chillr is here. With you, beside you, beneath you—supporting the life you're meant to live. Not the rushed one. The real one. The relaxed one.";
  const footerTopLeftText = "So sit back. Chill. And enjoy the life you\'re supposed to have.";

  return (
    <main className="flex flex-col min-h-screen bg-black text-white font-sans">

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg py-3 px-6 sm:px-8 md:px-16 lg:px-24 flex justify-between items-center">
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
          <Link href="#about" className="text-yellow-400 hover:text-yellow-300 transition-colors">about</Link>
          <Link href="#product" className="text-yellow-400 hover:text-yellow-300 transition-colors">product</Link>
          <Link href="#contact" className="text-yellow-400 hover:text-yellow-300 transition-colors">contact</Link>
        </div>
        <button className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors text-sm font-medium">
          Chillr Together
        </button>
        <div className="md:hidden">
          {/* You can add a hamburger icon here and logic for a mobile menu */}
        </div>
      </nav>

      {/* Hero Section (Spline) */}
      <section id="hero" className="h-screen w-full relative pt-16 sm:pt-20">
        <Spline
          scene="https://prod.spline.design/gxqfOuFgM4EqoDxO/scene.splinecode"
          style={{ width: '100%', height: 'calc(100% - 4rem)', position: 'absolute', top: '4rem', left: 0 }}
        />
        <div className="absolute inset-x-0 top-1/3 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-md">Stop thinking. Just chill.</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-yellow-400 mt-4 drop-shadow-md">Life is softer than you think.</p>
        </div>
      </section>

      {/* Section 2 (Philosophy Text + Image) */}
      <section id="about" className="py-12 sm:py-16 px-6 sm:px-8 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center bg-white text-black">
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-black !text-black">The Philosophy</h2>
          <p className="leading-relaxed">
            {section2Text}
          </p>
        </div>
        <div className="relative w-full h-72 sm:h-96 md:h-auto md:aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/sec2_img.jpg"
            alt="Chillr chair in urban setting"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {/* Section 3 (Brand Signage + Chair Sketches) */}
      <section id="product" className="py-12 sm:py-16 px-6 sm:px-8 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start bg-white text-black">
        <div className="flex flex-col gap-8">
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/sec3_img.jpg"
              alt="Chillr brand signage"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-700">
            <p>{section3Text1}</p>
            <p>{section3Text2}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center pt-0 md:pt-8">
          {[
            { src: "/sec3_chair1.svg", alt: "Chillr chair sketch 1", number: "1" },
            { src: "/sec3_chair2.svg", alt: "Chillr chair sketch 2", number: "2" },
            { src: "/sec3_chair3.svg", alt: "Chillr chair sketch 3", number: "3" },
          ].map((chair) => (
            <div key={chair.number} className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 p-4 bg-slate-50 rounded-xl shadow-lg">
              <span className="absolute top-2 left-2 text-xs sm:text-sm font-semibold text-black bg-white/50 backdrop-blur-sm px-1.5 py-0.5 rounded">
                {chair.number}
              </span>
              <Image
                src={chair.src}
                alt={chair.alt}
                layout="fill"
                objectFit="contain"
                className="p-2"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 (Spline Embed iframe) */}
      <section id="interactive" className="h-screen w-full bg-black">
        <div className="w-full h-full">
          <iframe
            src="https://my.spline.design/untitled-0f3EYsjnmYyxNNOZkKQSZZSA-e1z/"
            frameBorder="0"
            width="100%"
            height="100%"
            loading="lazy"
            title="Interactive Spline Scene - Chillr"
          ></iframe>
        </div>
      </section>

      {/* Footer (Spline) */}
      <footer id="contact" className="h-[50vh] min-h-[350px] w-full relative bg-black">
        <div className="absolute top-8 left-6 sm:left-8 md:left-16 lg:left-24 z-10 pointer-events-none">
          <p className="text-lg sm:text-xl text-gray-200 max-w-xs leading-relaxed">{footerTopLeftText}</p>
        </div>
        <Spline
          scene="https://prod.spline.design/82IsOFsX56iulNIm/scene.splinecode"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-10">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Chillr. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
