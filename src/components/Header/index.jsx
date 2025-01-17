import NavEnlace from "./NavEnlace";
import { NavLink } from "react-router";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/img/LogoMain.png" alt="logo" />
      </div>
      <nav>
        <ul className="nav">
          <NavLink to="/" end>
            <NavEnlace texto="HOME" />
          </NavLink>
          <NavLink to="/nuevo-video" end>
            <NavEnlace texto="NUEVO VIDEO" />
          </NavLink>
          <NavLink to="/nueva-categoria" end>
            <NavEnlace texto="NUEVA CATEGORIA" />
          </NavLink>
        </ul>
      </nav>
      <div
        className="hamburger"
        onClick={() => {
          const navLinks = document.querySelector(".nav");
          const hamburger = document.querySelector(".hamburger");

          navLinks.classList.toggle("show");
          hamburger.classList.toggle("active");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
