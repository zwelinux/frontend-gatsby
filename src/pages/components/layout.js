import * as React from 'react'
import { header, logo, headerTitle, stay, hide, main } from './layout.module.css'

const LayoutPage = ({ children }) => {
    return(
        <>
            <header className={header}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwN18HT0LewTN9RhvDEBkNVS06jaRLHeoN3E9JVspYGj2gHl_sPbB-VCD4oXByJF4qN4&usqp=CAU" width="40px" height="40px"  className={logo} />
                <span className={headerTitle}>Strapi With Gatsby</span>
                <ul>
                    <li className={stay}><a href="/">BLOG</a></li>
                    <li className={hide}><a href="/">ABOUT</a></li>
                </ul>
            </header>

            <main className={main}>
                {children}
            </main>

        </>
    )
}

export default LayoutPage