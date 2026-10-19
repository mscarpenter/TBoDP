import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        TBoDP
      </Link>
      <div className="navbar-menu">
        <Link to="/articles">Articles</Link>
        <Link to="/process">Process</Link>
        <Link to="/contact"> Let's Talk</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;