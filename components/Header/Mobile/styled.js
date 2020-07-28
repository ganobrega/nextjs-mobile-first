import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  height: 60px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Toggle = styled.a`
  display: flex;
  padding: 0 16px;
  height: 100%;
  align-items: center;
`;

export const Brand = styled.div`
  font-size: 20px;
  align-self: center;
  justify-self: center;
  display: flex;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
`;
