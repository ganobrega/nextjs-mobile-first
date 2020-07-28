import React from 'react';
import * as S from './styled';
import HamburgerIcon from './Hamburger.icon';

const Header = () => {
  return (
    <S.Container>
      <S.Toggle>
        <HamburgerIcon />
      </S.Toggle>

      <S.Brand>My Brand</S.Brand>
    </S.Container>
  );
};

export default Header;
