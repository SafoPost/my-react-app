import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
  width: 100%;
`;

const Container = styled.div`
  width: 1440px;
  margin: auto;
  padding: 15px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner />
    <Container>
      <section>
        <h2>Бургеры</h2>
        <ListItem
          itemList={dbMenu.burger}
          setOpenItem={setOpenItem}
        />
      </section>
      <section>
        <h2>Закуски / напитки</h2>
        <ListItem
          itemList={dbMenu.other}
          setOpenItem={setOpenItem}
        />
      </section>
    </Container>
  </MenuStyled>
);