import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  font-size: 30px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  margin-top: 50px;
  padding: 15px;
  color: #fff;
  z-index: 1;
  box-shadow: none;
  transition-delay: 0.2s;
  transition-property: box-shadow;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #222;
    opacity: 0.3;
    z-index: -1;
    transition-delay: 0.2s;
    transition-property: opacity;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 10px #222;
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(item => (
      <Item
        key={item.id}
        img={item.img}
        onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('ru-RU',
          { style: 'currency', currency: 'RUB' })}</p>
      </Item>
    ))}
  </List>
);