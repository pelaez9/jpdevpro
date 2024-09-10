const Resume = () => {
  return (
    <div className="container mt-5">
      <section className="text-center">
        <h2>Resume</h2>
        <p>I am a professional with over 20 years experience in sales, CRM, and management consulting, In order to increase my ability to lead technological projects, I have venturing into the programming world.  Feel free to download my resume and go to the Contact page in order to get in touch.</p>  
        <a
          href="https://drive.google.com/file/d/your-google-drive-id/view?usp=sharing"
          className="btn btn-gold mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download My Resume
        </a>
        <h3 className="mt-5">Proficiencies:</h3>
        <div className="proficiencies-icons">
          <i className="fab fa-html5 icon-black"></i> 
          <i className="fab fa-css3-alt icon-black"></i>  
          <i className="fab fa-js-square icon-black"></i>  
          <i className="fab fa-react icon-black"></i>  
          <i className="fab fa-node-js icon-black"></i>  
          <i className="fab fa-python icon-black"></i> 
          <i className="fas fa-database icon-black"></i>  
        </div>
      </section>
    </div>
  );
};

export default Resume;
