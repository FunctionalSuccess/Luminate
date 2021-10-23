import React from 'react';
import useComposition from './composition';

export default function LoggedOutMasthead(props) {
  const composition = useComposition(props);

  return composition || null;
}
