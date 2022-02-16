import React from 'react'
import '../../css/Footer/footer.css'
import { words } from '../../store/words';

function Footer() {
    return (
        <footer>
            {words.footerTitle}
        </footer>
    )
}

export default Footer;