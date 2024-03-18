import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../helpers/index';
import Navbar from '../Navbar';
import './style.scss'

function Header() {
    return (
        <header className=''>
            <Navbar />
        </header>
    );
}

export default Header;
