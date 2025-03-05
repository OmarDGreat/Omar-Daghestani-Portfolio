const Projects = () => {
  const projects = [
    {
      title: "WanderQuest Travel Planner",
      description:
        "A comprehensive travel planning application with itinerary creation, weather forecasting, and destination discovery features. Includes user authentication, trip organization, and interactive maps.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      githubLink: "https://github.com/OmarDGreat/d424",
      liveLink: "https://wanderquest.omar-daghestani.com/",
      image: "/wanderQuest.png",
      status: "completed",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with shopping cart, payment processing via Stripe, and user authentication. Includes admin dashboard for product management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/OmarDGreat/d424",
      liveLink: "https://ecom.omar-daghestani.com/",
      image: "/ecommerce.png",
      status: "completed",
    },
    {
      title: "Task Management System",
      description:
        "Project management tool with drag-and-drop task organization, team collaboration features, and progress tracking dashboards.",
      technologies: ["React", "Redux", "PostgreSQL", "Express"],
      githubLink: "#",
      liveLink: "#",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      status: "in-progress",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather forecasting application with interactive maps, location-based services, and severe weather alerts integration.",
      technologies: ["React", "OpenWeather API", "Mapbox", "TypeScript"],
      githubLink: "https://github.com/...",
      liveLink: "https://...",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fitness Tracker",
      description:
        "Personal fitness application with workout planning, progress tracking, and nutrition monitoring. Includes data visualization and goal setting features.",
      technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
      githubLink: "https://github.com/...",
      liveLink: "https://...",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI Image Generator",
      description:
        "Creative tool that generates unique images using AI algorithms. Features custom style transfer, image manipulation, and social sharing capabilities.",
      technologies: ["React", "TensorFlow.js", "Python", "AWS"],
      githubLink: "https://github.com/...",
      liveLink: "https://...",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                         transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                {project.status === "completed" ? (
                  <div
                    className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center"
                  >
                    <div className="space-x-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-gray-900 text-white rounded-full 
                                hover:bg-gray-700 transition-colors duration-300"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full 
                                hover:bg-blue-500 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <span className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-full">
                      Work in Progress
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 
                               text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
