import { Link } from "react-router-dom";
import "./css/NavMenu.css";

function NavMenu() {
  return (
    <nav>
      <img src="./assets/logo.png" className="logo" alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/videos">My Playlist</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavMenu;
