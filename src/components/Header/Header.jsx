import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/logo (2).svg'
import awatar from '../../assets/awatar/awatar.png'

function Header() {
    return (
        <header className='header'>
            <div className="container">
            <nav className="header__nav">
                <Link to='/'>
                    <img  src={logo} alt="" />
                </Link>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to='/' className='nav__link'>Bosh sahifa</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/books' className='nav__link'>Kitoblar</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/nazmm' className='nav__link'>Nazm</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/nazm' className='nav__link'>SliderAdib</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/sliderBooks' className='nav__link'>SliderBooks</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/login' className='nav__link'>Login</Link>
                    </li>
                </ul>
                <Link to="/profil" >
                    <img className='header__img' src={awatar} alt="" />
                </Link>
            </nav>
            </div>
        </header>
    )
}

export default Header