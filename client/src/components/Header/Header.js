import React from 'react'
import '../../css/Header/header.css'
import { words } from '../../store/words';

function Header() {
    return (
        <header>
            {words.headerTitle}
        </header>
    )
}

export default Header;
