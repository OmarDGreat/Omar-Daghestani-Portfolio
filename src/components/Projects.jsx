function Projects() {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100" id="projects">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">My Projects</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-lg">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex justify-center items-center bg-white p-10 rounded-lg shadow-lg">
              <img src="/404.jpg" alt="Project" className="w-72 h-48 object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  