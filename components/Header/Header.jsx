import React from 'react';
import Image from 'next/image';
import cake from "../../public/Images/cake.jpg";
import styles from "./header.module.css";
import Link from 'next/link';
const Header = () => {
    return (
        <div className='position-relative'>
            <div className={`${styles.imgDiv}`}>
            <Image src={cake} alt='cakeImage' style={{objectFit:"cover", maxWidth:"100%"}}></Image>

            </div>
            <div className='position-absolute start-50 translate-middle d-flex flex-column align-items-center mt-2' style={{top:"15%"}}>
            <p style={{fontFamily:"var(--headerFont)"}} className='text-center fs-1 fw-bold'>A Sweet Escape from the Everyday</p>
            <Link href="/recipes" className='btn btn-outline-danger fw-bold' style={{fontFamily:"var(--textFont)"}}>Explore Receipes</Link>
            </div>
        </div>
    );
};

export default Header;