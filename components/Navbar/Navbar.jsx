import React from "react";
import Link from "next/link";
import img from "../../public/Images/logo.png";
import Image from "next/image";
import styles from "./Navbar.module.css"
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? 'active' : '';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 d-flex align-items-center" href="/home" style={{color:"var(--mainColor)", fontFamily:"var(--headerFont)"}}>
            <Image src={img} alt="logoImg" width="90" height="70"/>
            <div className="">Cake Avenue</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse row" id="navbarNav">
            <ul className="navbar-nav justify-content-center">
              <li className={`nav-itrem ${styles.navItems}`}>
                <Link className={`nav-link ${isActive('/home')} ${isActive('/')}`} aria-current="page" href="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-itrem ${styles.navItems}`}>
                <Link className={`nav-link ${isActive('/recipes')}`} href="/recipes">
                  Blog
                </Link>
              </li>
              <li className={`nav-itrem ${styles.navItems}`}>
                <a className={`nav-link ${isActive('/contact')}`} href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-evenly">
            <Link className="btn btn-danger mx-2" style={{borderRadius:"20px"}} href="/signup">Sign up</Link>
            <Link className="btn btn-outline-danger" href="/login" style={{borderRadius:"20px"}}>Login</Link>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
