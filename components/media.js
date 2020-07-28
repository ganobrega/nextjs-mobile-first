import React, {useContext, useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';

export const Context = React.createContext();

/**
 * Components
 */
export const Mobile = ({children}) => {
  const isMobile = useMobile();

  return isMobile ? children : null
}

export const Desktop = ({children}) => {
  const isDesktop = useDesktop();

  return isDesktop ? children : null
}

export const NotDesktop = ({children}) => {
  const notDesktop = useNotDesktop();

  return notDesktop ? children : null
}

/**
 * HOOKS
 */
export const useMobile = () => {
  const context = useContext(Context);
  const isMobile = useMediaQuery({maxWidth: 576});

  return isMobile || context === 'phone'
}

export const useNotDesktop = () => {
  const context = useContext(Context);
  const notDesktop = useMediaQuery({maxWidth: 1024});

  return notDesktop && context !== 'desktop'
}

export const useDesktop = () => {
  const context = useContext(Context);
  const isDesktop = useMediaQuery({minWidth: 1024});

  return isDesktop
}