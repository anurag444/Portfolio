import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero_ring"></div>
        <div className="size-[820px] hero_ring"></div>
        <div className="size-[1020px] hero_ring"></div>
        <div className="size-[1220px] hero_ring"></div>
        <HeroOrbit
          size={430}
          rotate={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotate={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotate={-41}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="8s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotate={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotate={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotate={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotate={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="8s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotate={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotate={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="8s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotate={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Computer Image"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Actively seeking new opportunities.
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
  <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 mb-2 tracking-wide">
    Hello!
  </h1>
  <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text text-3xl md:text-5xl">
    I&apos;m Anurag Teckchandani
  </p>
  <p className="mt-4 text-center text-white/60 md:text-lg">
    I&apos;m a passionate Full Stack Engineer with 3+ years of experience specializing in building scalable web, mobile, and SaaS applications. Skilled in Java, Kotlin, Android, JavaScript, .NET, Node.js, Azure, React and modern frameworks, I bring innovative digital experiences to life, delivering performance-driven and user-centric solutions.
  </p>
</div>


        {/* <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            href="#projects"
          >
            <span className="font-semibold">Explore my Work</span>
            <ArrowDown className="size-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
            href="#contact"
          >
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};
