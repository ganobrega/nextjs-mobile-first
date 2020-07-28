import React, { useContext } from 'react';
import { createMedia } from '@artsy/fresnel';

export const Context = React.createContext();

/**
 * Components
 */
export const Mobile = ({ children }) => {
  const context = useContext(Context);

  return context === 'phone' ? (
    children
  ) : (
    <Media lessThan="lg">{children}</Media>
  );
};

export const Desktop = ({ children }) => {
  const context = useContext(Context);

  return context === 'desktop' ? (
    <Media greaterThan="md">{children}</Media>
  ) : null;
};

export const NotDesktop = ({ children }) => {
  const context = useContext(Context);

  if (context === 'phone') {
    return children;
  }

  return context !== 'desktop' ? (
    children
  ) : (
    <Media lessThan="lg">{children}</Media>
  );
};

const Medias = createMedia({
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1200,
  },
});

export const mediaStyles = Medias.createMediaStyle();

export const { Media, MediaContextProvider } = Medias;
