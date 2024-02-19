import React from 'react'
import '../header/header.css'
import logo from '../header/img/logo.png'
import like from '../header/img/rew.png'
import bin from '../header/img/bin.png'
import search from '../header/img/search.png'



class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="menu">
                    <img src={logo} alt="search" className='logo' />
                    <div className="line"></div>
                    <a href="" className="menuItem">главная</a>
                    <a href="" className="menuItem">каталог</a>
                    <div className="line"></div>
                    <a href="" className="menuItem">информация</a>
                </div>
                <div className="headerBtn">
                    <img src={search} alt="search" className="imgBtn" />
                    <img src={bin} alt="search" className="imgBtn" />
                    <img src={like} alt="search" className="imgBtn" />
                </div>

            </header>
        )
    }
}

export default Header