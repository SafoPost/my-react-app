import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CountLabel = styled.span`
  flex-grow: 1;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  margin: 0 15px;
  border: none;
  text-align: center;
`;

const ButtonCount = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #299B01;
  color: #299B01;
  font-size: 20px;
  transition: 0.2s;
  &:hover {
    background-color: #299B01;
    border: 1px solid transparent;
    color: #fff;
  }
`;

export function CountItem({ count, setCount, onChange }) {

  return (
    <CountWrapper>
      <CountLabel>Количество</CountLabel>
      <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>–</ButtonCount>
      <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange} />
      <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
    </CountWrapper>
  )
}