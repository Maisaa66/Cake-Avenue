import React from "react";
import Link from "next/link";
import img from "../../public/Images/logo.png";
import Image from "next/image";
import styles from "./Navbar.module.css"
const Navbar = () => {
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
            <ul className="navbar-nav justify-content-end">
              <li className={`nav-itrem ${styles.navItems}`}>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className={`nav-itrem ${styles.navItems}`}>
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className={`nav-itrem ${styles.navItems}`}>
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
