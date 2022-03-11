const Projects = () => {
  return (
    <div>
      <span className="text-lg font-semibold">👨‍💻 Projects</span>
      <div className="px-4 grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div
            key={item}
            className="h-48 bg-gray-300 shadow-sm rounded-md hover:shadow-lg cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
