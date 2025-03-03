import React from "react";

const services = [
    { title: "Web Development", desc: "Modern websites with React.js", icon: "💻" },
    { title: "SEO Optimization", desc: "Rank your website higher", icon: "🚀" },
    { title: "UI/UX Design", desc: "Beautiful & functional designs", icon: "🎨" },
  ];
  
  const Services = () => {
    return (
      <section id="services" className="py-20 bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-700">Our Services</h2>
          <p className="text-gray-500">We provide amazing solutions</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg w-72 text-center">
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  