import React from 'react';
import HeroDesktop from './Desktop';
import HeroMobile from './Mobile';

import { Desktop, NotDesktop } from '../media';

export default () => {
  return (
    <>
      <NotDesktop>
        <HeroMobile />
      </NotDesktop>
      <Desktop>
        <HeroDesktop />
      </Desktop>
    </>
  );
};
