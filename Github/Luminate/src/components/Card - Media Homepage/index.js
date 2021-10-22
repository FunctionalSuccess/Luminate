import React from 'react';
import useComposition from './composition';

export default function CardProviderHomepage(props) {
  const composition = useComposition(props);

  return composition || null;
}
