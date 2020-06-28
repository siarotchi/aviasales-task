import React from 'react'
import logo from '../../images/logo.png'
import styles from './Header.module.css'
import styled from 'styled-components'

const LogoImg = styled.img`
    border-radius: 50%;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.35);
    margin-bottom: 20px;
`

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <LogoImg src={logo} alt="header-logo" className={styles.logo} />
        </div>
    )
}

export default Header
