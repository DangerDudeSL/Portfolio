import Link from "next/link";

const Navbar = () => {
  //_rafce
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <p className="navbar-logo">
            <i className="fas fa-code"></i>
            <span> DK</span>
          </p>
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
