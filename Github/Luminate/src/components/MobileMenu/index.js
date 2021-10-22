import React from 'react';
import useComposition from './composition';

export default function MobileMenu(props) {
  const composition = useComposition(props);

  return composition || null;
}
