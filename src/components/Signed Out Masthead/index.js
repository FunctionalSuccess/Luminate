import React from 'react';
import useComposition from './composition';

export default function SignedOutMasthead(props) {
  const composition = useComposition(props);

  return composition || null;
}
