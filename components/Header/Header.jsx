import React from 'react';
import Image from 'next/image';
import cake from "../../public/Images/cakeCroped.jpg"
const Header = () => {
    return (
        <div className='position-relative'>
            <Image src={cake} alt='cakeImage' style={{objectFit:"cover", maxWidth:"100%", height:"auto"}}></Image>
            <div className='position-absolute start-50 translate-middle' style={{top:"20%"}}>
            <p style={{font}}>A Sweet Escape from the Everyday</p>
            <button className='btn btn-outline-danger  fs-5' style={{fontFamily:"var(--textFont)"}}>Explore Receipes</button>
            </div>
        </div>
    );
};

export default Header;