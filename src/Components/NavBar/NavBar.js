import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

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

// const Container = styled.div`
//   width: 1440px;
//   margin: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px;
//   color: #ffffff;
// `;

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

const BtnSign = styled.button`
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

const ImgSign = styled.img`
  width: 28px;
  margin-bottom: 3px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <BtnSign>
      <ImgSign src={signImg} alt="sign" />
      Войти
    </BtnSign>
  </NavBarStyled>
);