// src/components/Project.jsx
import React from 'react';

const Project = ({ title, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="card mb-4">
      <img src={imageUrl} className="card-img-top" alt={`${title} screenshot`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={liveUrl} className="btn btn-gold mr-3" target="_blank" rel="noopener noreferrer">Live App</a> 
        <a href={githubUrl} className="btn btn-gold" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;
