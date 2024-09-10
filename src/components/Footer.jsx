const Footer = () => {
    return (
      <footer className="bg-dark py-4 mt-5">
        <div className="container text-center">
          <h1 className="text-gold mb-3">Jorge Peláez</h1> 
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://github.com/pelaez9" className="text-gold">GitHub</a>  
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/jorge-alberto-pel%C3%A1ez-a32b3923b/" className="text-gold">LinkedIn</a>  
            </li>
            <li className="list-inline-item">
              <a href="https://stackoverflow.com/users/your-stackoverflow" className="text-gold">Stack Overflow</a> 
            </li>
          </ul>
          <p className="text-light">&copy; {new Date().getFullYear()} Jorge Peláez</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  