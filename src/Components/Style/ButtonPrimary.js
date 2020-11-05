import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  min-width: 250px;
  height: 65px;
  font-size: 21px;
  color: #fff;
  background-color: #299B01;
  border: none;
  box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: none;
    background: linear-gradient(to top, #196100, #2eb000)
  }
  &:focus {
    box-shadow: inset 5px 5px 10px 3px rgba(0, 0, 0, 0.5);
  }
`;