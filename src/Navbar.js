import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={require("./assets/icon.jpg")} alt="pdh home base logo"/>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/rules">RULES</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/articles">ARTICLES</Link>
        <Link to="/about">ABOUT US</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;