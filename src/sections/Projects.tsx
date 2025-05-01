import PatientImage from "@/assets/images/PatientImage.png";
import intelliDocsImage from "@/assets/images/intelliDocs.png";
import virtualDecorImage from "@/assets/images/virtualdecorImage.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Personal",
    year: "2025",
    title: "PatientIQ",
    results: [
      { title: "Built scalable microservices with Spring Boot, Kafka, gRPC." },
      { title: "Secured APIs with Spring Security gateway." },
      { title: "Deployed Docker containers to AWS LocalStack." },
    ],
    link: "https://github.com/anurag444/PatientIQ",
    image: PatientImage,
  },
  {
    company: "Personal",
    year: "2025",
    title: "IntelliDocs",
    results: [
      { title: "SaaS platform for AI-powered PDFs." },
      { title: "Integrated Stripe payments and user management." },
      { title: "Designed role-based dashboards with media storage." },
    ],
    link: "#",
    image: intelliDocsImage,
  },
  {
    company: "Personal",
    year: "2024",
    title: "VirtualDecorAR",
    results: [
      { title: "AR-based furniture shopping app." },
      { title: "Architected MVVM design with StateFlow, Hilt." },
      { title: "Connected .NET backend via ngrok, Firebase." },
    ],
    link: "https://github.com/anurag444/VirtualDecorAR",
    image: virtualDecorImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content=[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${index * 40}px`
              }}
            >

              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage:`url(${grainImage.src})`
              }}></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">

                <div className="lg:pb-16">
                <div className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link} target="_blank"
                rel="noopener noreferrer">
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Project</span>
                  <ArrowUpIcon className="size-4" />
                </button>
              </a>
              </div>
              <div className="relative">
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"></Image>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
