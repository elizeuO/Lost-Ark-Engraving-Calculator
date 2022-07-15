import React from "react";
import './header.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ()=>{
    return <header className="c-header">
        <div className="c-container">
        <div className="l-flex l-flex--center">

            <a href="/">
            <FontAwesomeIcon icon='home' />
            Home
            </a>

            <a href="/Engraving">
            <FontAwesomeIcon icon='calculator' />
            Engraving
            </a>

            <a href="/Engraving">
            <FontAwesomeIcon icon='calculator' />
            Changelog
            </a>

        </div>
        </div>
    </header>
}

export default Header;