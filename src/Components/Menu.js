import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../image/banner.png';

const BannerBg = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 80px;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;

const MenuStyled = styled.main`
  width: 100%;
`;

const Container = styled.div`
  width: 1440px;
  margin: auto;
  padding: 15px;
`;

export const Menu = () => (
  <MenuStyled>
    <BannerBg />
    <Container>
      <section>
        <h2>Бургеры</h2>
        <ListItem itemList={dbMenu.burger} />
      </section>
      <section>
        <h2>Закуски / напитки</h2>
        <ListItem itemList={dbMenu.other} />
      </section>
    </Container>
  </MenuStyled>
);