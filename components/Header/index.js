import React from 'react';
import HeaderDesktop from './Desktop';
import HeaderMobile from './Mobile';

import { Desktop, NotDesktop } from '../media';

export default () => {
  return (
    <>
      <NotDesktop>
        <HeaderMobile />
      </NotDesktop>
      <Desktop>
        <HeaderDesktop />
      </Desktop>
    </>
  );
};
