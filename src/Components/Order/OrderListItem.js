import React from 'react';
import styled from 'styled-components';
import trashBin from '../../image/trash-bin.svg';
import { totalPriceItems } from '../Functions/totalPriceItems'
import { toLocaleCurrency } from '../Functions/toLocaleCurrency';

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


export const OrderListItem = ({ order }) => {

  const totalOrder = totalPriceItems(order);

  return (
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{toLocaleCurrency(totalOrder)}</ItemPrice>
      <TrashButton />
    </OrderItemStyled>
  )
};