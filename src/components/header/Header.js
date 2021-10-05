import React from 'react';
import { Header1, Logo } from './styles'
import DarkModeButton from '../darkModeButton/DarkModeButton';

const Header = () => {
    return (
        <Header1>
            <Logo>LoginScreen</Logo>
            <DarkModeButton />
        </Header1>
    );
}

export default Header;