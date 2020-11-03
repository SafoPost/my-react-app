import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from './ButtonPrimary'

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



export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalContent>
          <ModalText>
            <span>{openItem.name}</span>
            <span>{openItem.price.toLocaleString('ru-RU',
              { style: 'currency', currency: 'RUB' })}</span>
          </ModalText>
          <ButtonPrimary>Добавить</ButtonPrimary>
        </ModalContent>
      </Modal>
    </Overlay>
  )
};