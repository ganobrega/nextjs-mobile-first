import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  height: 80px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
`;

export const Brand = styled.div`
  font-size: 30px;
  align-self: center;
  justify-self: center;
  display: flex;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
`;
