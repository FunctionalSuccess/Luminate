import React from 'react';
import useComposition from './composition';

export default function FilterCardSlider(props) {
  const composition = useComposition(props);

  return composition || null;
}
