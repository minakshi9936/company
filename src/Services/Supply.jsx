import React, { useState, useEffect } from "react";
import {
  Package,
  Droplets,
  Recycle,
  ShoppingBag,
  Utensils,
  Building2,
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
          const increment = end / (duration / 16); // 60fps
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <h3 ref={ref} className="text-4xl font-extrabold text-yellow-400">
      {count.toLocaleString()}+
    </h3>
  );
}

// ✅ Combined Services + Key Offerings
const supplyData = [
  {
    title: "Corporate & Industrial Cleaning Solutions",
    description:
      "Eco-friendly cleaning products for facilities, hotels, hospitals, and corporate campuses that meet commercial-grade standards.",
    icon: <Droplets className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Tissue & Paper Products",
    description:
      "Jumbo rolls, toilet paper, napkins, facial tissues, and heavy-duty industrial wipes for bulk supply and hygiene needs.",
    icon: <Recycle className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Pantry & Crockery Range",
    description:
      "Premium crockery, cutlery, glassware, dinner sets, boutique tea organizers, and assorted trays for corporates.",
    icon: <Utensils className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Custom Private Labelling",
    description:
      "Tailored tissue and hygiene solutions with your branding for distributors and corporate identity.",
    icon: <Package className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Bulk Supply Capabilities",
    description:
      "Seamless logistics and supply chain management to deliver consistent quality, on time and in volume.",
    icon: <ShoppingBag className="w-10 h-10 text-yellow-400" />,
  },
  {
    title: "Floor Care Solutions",
    description:
      "High-performance cleaners, polishers, and strippers for all types of floors.",
    icon: <Building2 className="w-10 h-10 text-yellow-400" />,
  },
];

// ✅ Life at ABG Images
const lifeImages = [
  "/src/assets/images/abg2.jpg",
  "/src/assets/images/abg1.jpeg",
  "/src/assets/images/abg2.jpg",
  "/src/assets/images/v.jpg",
];

export default function Supply() {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % lifeImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-black bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/src/assets/images/bg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Page Content */}
      <div className="relative z-10 py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* About Section */}
          <section className="text-center">
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
              About Supply Services in ABG GROUP
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At{" "}
              <span className="font-semibold text-yellow-400">ABG Group</span>,
              we understand that smooth operations depend on reliable
              essentials. Whether it’s eco-friendly cleaning chemicals, tissue
              papers, or other day-to-day requirements, our goal is to make sure
              corporates, industries, and residential societies never have to
              worry about their supplies. We don’t just deliver products — we
              deliver consistency, quality, and peace of mind. Every order,
              whether big or small, is handled with the same commitment to
              timeliness and care. Over time, this has helped us build lasting
              relationships with organizations that trust us to keep their
              workplaces and communities running without interruptions. What
              sets us apart is our focus on sustainable and eco-safe solutions.
              We believe that being responsible today leads to a healthier
              tomorrow — for both people and the planet. For us, supply services
              are more than logistics. They’re about support — making sure our
              clients have what they need, when they need it, so they can focus
              on what truly matters.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
              Our Services & Key Offerings
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {supplyData.map((item, index) => (
                <div key={index} className="group [perspective:1200px]">
                  <div
                    className="relative h-64 w-full rounded-2xl shadow-md 
                     transition-transform duration-[900ms] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] 
                     [transform-style:preserve-3d] 
                     group-hover:[transform:rotateY(180deg)]"
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center 
                          p-6 bg-gray-900/80 rounded-2xl shadow-md 
                          [backface-visibility:hidden]"
                    >
                      <div className="flex items-center justify-center mb-4 text-yellow-400 text-4xl">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                        {item.title}
                      </h3>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center 
                          p-6 bg-yellow-400/90 rounded-2xl shadow-lg text-gray-900 
                          [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    >
                      <p className="text-sm font-medium">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ✅ Call to Action with Brochure Button */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Partner with ABG Supply
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Collaborate with us for innovative supply solutions and
              eco-friendly products that empower your business.
            </p>
            <a
              href="/brochures/Supply Service Brochure.pdf"
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
    </div>
  );
}
