import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark py-4">
      <div className="container text-center"> 
        <h1 className="text-gold">Jorge (JP) Peláez</h1> 
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid justify-content-center"> 
            <ul className="navbar-nav"> 
              <li className="nav-item">
                <Link to="/" className="nav-link">About Me</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link">Resume</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
