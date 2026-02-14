export default function Work() {
  const work = [
    {
      name: "LunaMothCircle Website",
      icon: "./assets/lmc.png",
      description: "WordPress Website Design & Development",
      link: "https://lunamothcircle.com/",
    },
    {
      name: "Mochi4ThePlanet Website",
      icon: "./assets/mochi.png",
      description: "WordPress Website Design & Development",
      link: "https://mochi4theplanet.com/",
    },
    {
      name: "Mini Shopify SpringBoot Project",
      icon: "./assets/shopify.png",
      description: "Full-Stack Web Application",
      link: "https://github.com/Areej504/mini-shopify-sysc4806",
    },
    {
      name: "AI Automated Testing System",
      icon: "./assets/testing.png",
      description: "Automated Testing Framework",
      link: "https://github.com/Areej504/CapstoneProject_vm",
    },
    {
      name: "Health and Fitness Center Management App (Java + PostgreSQL)",
      icon: "./assets/health.png",
      description: "Java & Database Application",
      link: "https://github.com/Areej504/UrHealthApp",
    },
    {
      name: "Vite Typescript ToDo Website",
      icon: "./assets/todo-project.png",
      description: "Frontend Web Application",
      link: "https://github.com/Areej504/vite-todo-project",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in web development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5 dark:text-black">
        {work.map((project) => (
          <div
            key={project.name}
            className="aspect-square bg-no-repeat bg-contain bg-center rounded-lg relative group"
            style={{ backgroundImage: `url(${project.icon})` }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-end justify-center"
            >
              <div className="bg-white w-10/12 rounded-md py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.name}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <img
                    src="./assets/send-icon.png"
                    alt="link icon"
                    className="w-5"
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
