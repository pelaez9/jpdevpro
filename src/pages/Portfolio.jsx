import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      imageUrl: 'project1-image-url',
      liveUrl: 'project1-live-url',
      githubUrl: 'project1-github-url',
    },
  
  ];

  return (
    <div className="container mt-5">
      <section>
        <h2 className="text-center mb-5">Portfolio</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Project
                title={project.title}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
