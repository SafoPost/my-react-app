import React from 'react';
import styled from 'styled-components';
import trashBin from '../image/trash-bin.svg';

const OrderItemStyled = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-image: url(${trashBin});
  background-color: transparent;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;




export const OrderListItem = () => (
  <OrderItemStyled>
    <ItemName>JS Burger</ItemName>
    <span>2</span>
    <ItemPrice>750p</ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);