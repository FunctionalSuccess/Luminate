/* THIS FILE WAS AUTOGENERATED BY CLUTCH. DO NOT EDIT. */
import React from 'react';
import * as b from '@clutch-creator/bridge';
import SpotifyPodcastEmbed from '../../../components/Spotify Podcast Embed';

export default (props) => {
    const [report, getKey] = b.useReport(props);
    const { variants } = props;
    const variables = {};
  
    const rs = report(null, '17c902d059814c88a00332d9', 'COMPOSITION', props, variables);
  
    return ([
      <SpotifyPodcastEmbed
        key='spotify-embed-2'
        variants={b.getVariants(undefined)}
        link={'https://open.spotify.com/show/3k2fpuQecYQBUr7zTgSNdZ?si=8f71aa392b194f16'}
        width={'100%'}
        height={'100%'}
        data-d={getKey(rs, '17c902d158b14c88a00332dc')}
      />
    ]);
  };
  ;
