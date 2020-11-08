import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from '../Style/ButtonPrimary';
import { CountItem } from '../Modal/CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/totalPriceItems'
import { toLocaleCurrency } from '../Functions/toLocaleCurrency'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: #fff;
  position: relative;
`;

const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 220px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ModalText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pacifico;
  font-size: 30px;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount();

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem,
    count: counter.count
  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  const totalOrder = totalPriceItems(order)

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalContent>
          <ModalText>
            <span>{openItem.name}</span>
            <span>{toLocaleCurrency(openItem.price)}</span>
          </ModalText>
          <CountItem {...counter} />
          <TotalPriceItem>
            <span>Цена: </span>
            <span>{toLocaleCurrency(totalOrder)}</span>
          </TotalPriceItem>
          <ButtonPrimary onClick={addToOrder}>Добавить</ButtonPrimary>
        </ModalContent>
      </Modal>
    </Overlay>
  )
};