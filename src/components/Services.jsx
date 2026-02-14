export default function Services() {
  const services = [
    {
      name: "WordPress Website Design & Development",
      icon: "./assets/web-icon.png",
      description:
        "I design and develop responsive, conversion-focused WordPress websites tailored to your brand and goals. From landing pages to full business sites, I handle theme customization, SEO optimization, performance improvements, and CMS setup for easy content management.",
    },
    {
      name: "Front-End Development (React, HTML, CSS)",
      icon: "./assets/graphics-icon.png",
      description:
        "I develop modern, responsive web interfaces using React and core web technologies. I focus on clean component architecture, maintainable code, and translating designs into seamless interactive experiences.",
    },
    {
      name: "UI/UX Design",
      icon: "./assets/ui-icon.png",
      description:
        "I design user-centered interfaces through wireframing and prototyping, focusing on usability, clarity, and intuitive interaction. My goal is to create experiences that balance user needs with business objectives.",
    },
    {
      name: "Test Development (UI & Automated Testing)",
      icon: "./assets/mobile-icon.png",
      description:
        "I build structured testing solutions to improve reliability and reduce bugs before release. This includes UI testing, automated test case generation, black-box testing strategies, and integration testing frameworks to ensure systems behave as expected.",
    },
  ];
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I provide end-to-end web development, testing, and design solutions —
        combining technical depth with user-focused thinking to build reliable,
        scalable, and impactful digital products.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <img src={service.icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
