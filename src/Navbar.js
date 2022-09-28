import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={require("./assets/icon.jpg")} alt="pdh home base logo"/>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/Rules">RULES</Link>
        <Link to="/Faq">FAQ</Link>
        <Link to="/Articles">ARTICLES</Link>
        <Link to="/About">ABOUT US</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;