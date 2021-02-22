import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = props => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Param/1">Param #1</Link>
        </li>
        <li>
          <Link to="/Param/2">Param #2</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu