import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Users,
  GraduationCap,
  ClipboardList,
  FileText,
  Smile,
  DollarSign,
  Target,
  FileSearch,
  MessageSquare,
  CheckCircle,
  Handshake,
  Rocket,
} from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

// ✅ Animated Counter Component
function Counter({ end, duration = 2000 }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <h3 ref={ref} className="text-4xl font-extrabold text-yellow-400">
      {count.toLocaleString()}+
    </h3>
  );
}

// HR Services
const services = [
  {
    title: "End-to-End Recruitment",
    description:
      "We manage sourcing, screening, scheduling, follow-ups, and onboarding so your team can focus on business.",
    icon: <Briefcase className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Volume & Field Hiring",
    description:
      "Onboard 50+ staff quickly for industries like banking, insurance, telecom, and retail.",
    icon: <Users className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Mid & Senior Level Hiring",
    description:
      "Find professionals who not only fit the role but align with your company values and goals.",
    icon: <ClipboardList className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Campus & Internship Hiring",
    description:
      "Build a pipeline of future talent by tapping into fresh energy from colleges and universities.",
    icon: <GraduationCap className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "RPO (Recruitment Process Outsourcing)",
    description:
      "Dedicated recruiters work like your in-house team, aligned with your processes and mandates.",
    icon: <Users className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "HR Operations & Documentation",
    description:
      "Offer letters, joining kits, background checks, and employee documentation handled seamlessly.",
    icon: <FileText className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Employee Engagement & Retention",
    description:
      "We design strategies to retain talent with surveys, interviews, and feedback mechanisms.",
    icon: <Smile className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Payroll & Compliance Advisory",
    description:
      "Assistance with payroll setup, PF/ESIC support, labor law compliance, and HRMS implementation.",
    icon: <DollarSign className="w-10 h-10 text-yellow-400" />,
  },
];

// Recruitment Cycle Steps (with icons)
const cycleSteps = [
  {
    title: "1. Understanding Client Needs",
    desc: "Align business goals, culture & expectations.",
    icon: <Target className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "2. Job Profiling & Strategy",
    desc: "Create job descriptions & hiring plans.",
    icon: <FileText className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "3. Screening & Shortlisting",
    desc: "Resume screening, assessments & discussions.",
    icon: <FileSearch className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "4. Interview Coordination",
    desc: "Smooth scheduling & candidate prep.",
    icon: <MessageSquare className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "5. Feedback & Selection",
    desc: "Transparent feedback for right match.",
    icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
  },
  
  {
    title: "6. Offer Management",
    desc: "Negotiations, clarity & offer rollout.",
    icon: <Handshake className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "7. Post-Joining Support",
    desc: "Ensure onboarding & long-term retention.",
    icon: <Rocket className="w-8 h-8 text-yellow-400" />,
  },
];

const lifeImages = [
  "/life at abg/abg1.jpg",
  "/life at abg/abg2.jpg",
  "/life at abg/abg3.jpg",
  "/life at abg/abg4.jpg",
  "/life at abg/abg5.jpg",
  "/life at abg/abg6.jpg",
  "/life at abg/abg7.jpg",
  "/life at abg/abg8.jpg",
  "/life at abg/abg9.jpg",
  "/life at abg/abg10.jpg",
  "/life at abg/abg11.jpg",
  "/life at abg/abg12.jpg",
  "/life at abg/abg13.jpg",
  "/life at abg/abg14.jpg",
  "/life at abg/abg15.jpg",
  
];

export default function HR() {
  const [current, setCurrent] = useState(0);
  const carouselRef = React.useRef(null);

  // Auto-play dots
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % lifeImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll when current changes
  useEffect(() => {
    if (carouselRef.current) {
      const childWidth = carouselRef.current.children[current].offsetWidth;
      carouselRef.current.scrollTo({
        left: childWidth * current,
        behavior: "smooth",
      });
    }
  }, [current]);


  return (
    <div
      className="relative min-h-screen bg-black bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/src/assets/images/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 py-12 px-6 lg:px-20">
        {/* Key Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-12">
          <div className="bg-gray-900/80 p-8 rounded-2xl shadow-md hover:shadow-yellow-500/30 transition duration-300">
            <Counter end={1000000} duration={2500} />
            <p className="mt-2 text-gray-300 text-lg">Data Pool</p>
          </div>

          <div className="bg-gray-900/80 p-8 rounded-2xl shadow-md hover:shadow-yellow-500/30 transition duration-300">
            <Counter end={50} duration={2000} />
            <p className="mt-2 text-gray-300 text-lg">Clients</p>
          </div>

          <div className="bg-gray-900/80 p-8 rounded-2xl shadow-md hover:shadow-yellow-500/30 transition duration-300">
            <Counter end={500} duration={2000} />
            <p className="mt-2 text-gray-300 text-lg">Successful Candidates</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto space-y-20">
          {/* About */}
          <section className="text-center">
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
              About HR Recruitment Services in ABG GROUP
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At{" "}
              <span className="font-semibold text-yellow-400">ABG Group</span>,
              we believe recruitment is not just about filling vacancies — it’s
              about building futures. Every candidate carries a story, and every
              organization has a vision. Our role is to bring the two together.
              For us, hiring is more than matching skills with job descriptions.
              It’s about understanding people — their aspirations, strengths,
              and potential — and aligning them with workplaces where they can
              truly thrive. On the other side, it’s about listening to our
              clients, understanding their culture, and helping them shape teams
              that will grow with them. Over the years, we’ve proudly stood by
              organizations as trusted partners — whether it’s supporting them
              in bulk hiring, providing dedicated RPO models, or sourcing
              specialized talent. At the same time, we’ve walked with thousands
              of candidates on their career journeys, celebrating their
              successes as our own. At the heart of our HR services is a simple
              belief: when people find the right place to work, and
              organizations find the right people to grow with, everyone wins.
            </p>
          </section>

          {/* Services */}
          {/* ✅ Services Section with Smooth Flip Effect */}
          <section>
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
              Our Services
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div key={index} className="group [perspective:1200px]">
                  <div
                    className="relative w-full h-64 rounded-2xl shadow-md cursor-pointer
                     transition-transform duration-[900ms] 
                     ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
                     [transform-style:preserve-3d] 
                     group-hover:[transform:rotateY(180deg)]"
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center 
                          bg-gray-900/80 rounded-2xl shadow-md p-6
                          [backface-visibility:hidden]"
                    >
                      <div className="flex items-center justify-center mb-4 text-yellow-400 text-4xl">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 flex items-center justify-center 
                          bg-yellow-400/90 rounded-2xl shadow-lg p-6
                          [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    >
                      <p className="text-gray-900 text-sm text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

{/*Life at ABG */}
<section className="text-center">
  <h2 className="text-3xl font-bold text-yellow-400 mb-12">Life at ABG</h2>

  {/* ✅ Auto-scrollable carousel */}
  <div
    ref={carouselRef}
    className="relative w-full max-w-6xl mx-auto overflow-x-scroll snap-x snap-mandatory flex gap-6 px-4 scrollbar-hide scroll-smooth"
  >
    {lifeImages.map((src, index) => (
      <div
        key={index}
        id={`slide-${index}`}
        className="snap-center flex-shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] 
         transition-transform duration-500 hover:scale-105"
      >
        <img
          src={src}
          alt={`Life at ABG ${index + 1}`}
          className="w-full h-72 object-cover rounded-2xl shadow-xl border-2 border-yellow-400/20"
        />
      </div>
    ))}
  </div>

  {/* ✅ Dots indicator */}
  <div className="flex justify-center mt-6 gap-3">
    {lifeImages.map((_, i) => (
      <span
        key={i}
        className={`w-3 h-3 rounded-full transition-all ${
          i === current
            ? "bg-yellow-400 scale-125 shadow-md shadow-yellow-500/50"
            : "bg-gray-600 hover:bg-yellow-300"
        }`}
      />
    ))}
  </div>

  {/* ✅ Extra CSS to hide scrollbar */}
  <style jsx>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
</section>


          {/* Recruitment Cycle */}
          <section className="px-4 py-10">
            <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
              Recruitment Cycle
            </h2>

            <div className="max-w-6xl mx-auto">
              {/* Top Row with arrows */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
                {cycleSteps
                  .slice(0, Math.ceil(cycleSteps.length / 2))
                  .map((step, index, arr) => (
                    <React.Fragment key={index}>
                      <div className="bg-gray-900/80 p-6 rounded-2xl shadow-md w-full sm:w-56 text-center hover:shadow-yellow-500/30 transition transform hover:-translate-y-2">
                        <div className="flex justify-center mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-yellow-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">
                          {step.desc}
                        </p>
                      </div>

                      {/* Right arrow except after last card */}
                      {index < arr.length - 1 && (
                        <FaArrowRight className="hidden sm:block text-yellow-400 w-6 h-6 animate-pulse" />
                      )}
                    </React.Fragment>
                  ))}
              </div>

              {/* Bottom Row with arrows */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
                {cycleSteps
                  .slice(Math.ceil(cycleSteps.length / 2))
                  .map((step, index, arr) => (
                    <React.Fragment key={index}>
                      <div className="bg-gray-900/80 p-6 rounded-2xl shadow-md w-full sm:w-56 text-center hover:shadow-yellow-500/30 transition transform hover:-translate-y-2">
                        <div className="flex justify-center mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-yellow-300">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-2">
                          {step.desc}
                        </p>
                      </div>

                      {/* Same right arrow but rotated for reverse flow */}
                      {index < arr.length - 1 && (
                        <FaArrowRight className="hidden sm:block text-yellow-400 w-6 h-6 animate-pulse" />
                      )}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Let’s Grow Together
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with us to experience seamless recruitment solutions and
              tailored HR strategies for your success.
            </p>
            <a
              href="/brochures/ABG HR Profile N.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
            >
              Download Brochure
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Custom Tailwind 3D Styles */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
