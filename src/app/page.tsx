import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  const section2Text = "Stop thinking. Just chill. In a world that never slows down, it's easy to forget that rest isn't a reward—it's a right. You weren't made to rush from task to task, always poisoning, always pushing. Life is softer than you think. And it gets even softer when you stop chasing and start breathing.";
  const section3Text1 = "Let the noise fade. Let your shoulders drop. Let comfort wrap around you like a favorite memory.";
  const section3Text2 = "Chillr is here. With you, beside you, beneath you—supporting the life you're meant to live. Not the rushed one. The real one. The relaxed one.";

  return (
    <main className="flex flex-col min-h-screen bg-black text-white font-sans">

      {/* Hero Section (Spline) */}
      <section className="h-screen w-full relative">
        <Spline
          scene="https://prod.spline.design/gxqfOuFgM4EqoDxO/scene.splinecode"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-md">Stop thinking. Just chill.</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-yellow-400 mt-4 drop-shadow-md">Life is softer than you think.</p>
        </div>
      </section>

      {/* Section 2 (Philosophy Text + Image) */}
      <section className="py-12 sm:py-16 px-6 sm:px-8 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center bg-gray-900">
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Using prose classes for nice text formatting, prose-invert for dark mode */}
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-yellow-400 !text-yellow-400">The Philosophy</h2>
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
      <section className="py-12 sm:py-16 px-6 sm:px-8 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start bg-black">
        <div className="flex flex-col gap-8">
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/sec3_img.jpg"
              alt="Chillr brand signage"
              layout="fill"
              objectFit="cover" 
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-300">
            <p>{section3Text1}</p>
            <p>{section3Text2}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center pt-0 md:pt-8">
          {[
            { src: "/sec3_chair1.svg", alt: "Chillr chair sketch 1" },
            { src: "/sec3_chair2.svg", alt: "Chillr chair sketch 2" },
            { src: "/sec3_chair3.svg", alt: "Chillr chair sketch 3" },
          ].map((chair, index) => (
            <div key={index} className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 p-2 bg-gray-800 rounded-lg shadow-lg">
              <Image 
                src={chair.src} 
                alt={chair.alt} 
                layout="fill" 
                objectFit="contain" 
                className="filter invert p-2" // Invert makes black SVG white
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 (Spline Embed iframe) */}
      <section className="py-12 sm:py-16 px-6 sm:px-8 md:px-16 lg:px-24 h-[70vh] min-h-[500px] bg-gray-900 flex flex-col">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-yellow-400">Interactive Experience</h2>
        <div className="flex-grow rounded-lg overflow-hidden shadow-2xl">
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
      <footer className="h-[40vh] min-h-[300px] w-full relative bg-black">
         <Spline
          scene="https://prod.spline.design/82IsOFsX56iulNIm/scene.splinecode"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Chillr. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
