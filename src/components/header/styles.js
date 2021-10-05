import styled from 'styled-components';

export const Header1 = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #8DA1B9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 2;
`;

export const Logo = styled.a`
    padding: 0
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    display: inline-block;
    font-size: 30px;
`;