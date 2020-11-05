import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from '../Style/ButtonPrimary';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 25px 15px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderTitle = styled.h2`
  font-size: 39px;

`;

const OrderContent = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderList = styled.ul`
  width: 100%;
  margin-top: 60px;
  flex-grow: 1;
`;

const EmptyList = styled.p`
  text-align: center;
  width: 100%;
  margin-top: 60px;
  flex-grow: 1;
`;

const Total = styled.div`
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span:first-child {
    flex-basis: 50%;
  }
`;

const TotalPrice = styled.span`
  margin-left: 20px;
  margin-right: 34px;
  min-width: 65px;
  text-align: right;
`;

export const Order = ({ orders }) => (
  <OrderStyled>
    <OrderTitle>Ваш каказ</OrderTitle>
    <OrderContent>
      {orders.length ?
        <OrderList>
          {orders.map(order => <OrderListItem order={order} />)}
        </OrderList> :
        <EmptyList>Список заказов пуст</EmptyList>}
      <Total>
        <span>Итого:</span>
        <span>5</span>
        <TotalPrice>850р</TotalPrice>
      </Total>
      <ButtonPrimary>Оформить</ButtonPrimary>
    </OrderContent>
  </OrderStyled>
);