import React from 'react';
import useComposition from './composition';

export default function MUIApp(props) {
  const composition = useComposition(props);

  return composition || null;
}
