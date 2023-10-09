import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link className="menu__link" to="/">Home</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/grass">Grass</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;