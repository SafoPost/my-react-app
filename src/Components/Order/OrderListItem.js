import React, { useRef } from 'react';
import styled from 'styled-components';
import trashBin from '../../image/trash-bin.svg';
import { totalPriceItems } from '../Functions/secondaryFunctions'
import { formatCurrency } from '../Functions/secondaryFunctions';

const OrderItemStyled = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  &:hover {
    color: #196100;
  }
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ToppingsList = styled.p`
  padding: 0 10px;
  font-size: 12px;
  color: #969696;
  flex-basis: 100%;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 100px;
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

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {

  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  const refDeleteBtn = useRef(null);

  return (
    <OrderItemStyled onClick={(e) => e.target !== refDeleteBtn.current && setOpenItem({ ...order, index })}>
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton ref={refDeleteBtn} onClick={() => deleteItem(index)} />
      {topping ? <ToppingsList>+ {topping}</ToppingsList> : null}
    </OrderItemStyled>
  )
};