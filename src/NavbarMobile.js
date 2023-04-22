import { Link } from 'react-router-dom';

const NavbarMobile = () => {

  return (
    <div id="navbar-mobile">
      <div>
        PDH Home Base
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link to="/" onClick={() => {document.getElementById("menu-toggle").checked = false;}}>HOME</Link>
        </li>
        <li>
          <Link to="/rules" onClick={() => {document.getElementById("menu-toggle").checked = false;}}>RULES</Link>
        </li>
        <li>
          <Link to="/faq" onClick={() => {document.getElementById("menu-toggle").checked = false;}}>FAQ</Link>
        </li>
        <li>
          <Link to="/articles" onClick={() => {document.getElementById("menu-toggle").checked = false;}}>ARTICLES</Link>
        </li>
        <li>          
          <Link to="/about" onClick={() => {document.getElementById("menu-toggle").checked = false;}}>ABOUT US</Link>
        </li>
      </ul>
    </div>
  );
}
 
export default NavbarMobile;