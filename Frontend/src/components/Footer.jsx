import React from 'react'
import logo from '../img/logo-transparent-png.png'


const Footer = () => {
    return (
        <div className='footer'>
            <span> Copyright ©2023 All rights reserved by :  </span>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Footer