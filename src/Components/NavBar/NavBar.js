import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import loginImg from '../../image/login.svg';
import logoutImg from '../../image/logout.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 80px;
  background-color: #299b01;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const BtnLogIn = styled.button`
  min-width: 55px
  padding: 0 5px;
  border: none;
  background-color: transparent;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
`;

const BtnLogOut = styled.button`
  min-width: 55px
  margin-left: 15px;
  border: none;
  background-color: transparent;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  `;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const ImgSign = styled.img`
  width: 28px;
  margin-bottom: 3px;
`;

const ImgSignOut = styled.img`
  width: 28px;
  margin-left: 15px;
`

export const NavBar = ({ authentication, logIn, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    {authentication ?
      <User>
        <span>{authentication.displayName}</span>
        <BtnLogOut title="Выйти" onClick={logOut}>
          <ImgSignOut src={logoutImg} alt="Log-Out" />
        </BtnLogOut>
      </User> :
      <BtnLogIn onClick={logIn}>
        <ImgSign src={loginImg} alt="Log-In" />
        <span>Войти</span>
      </BtnLogIn>
    }
  </NavBarStyled>
);