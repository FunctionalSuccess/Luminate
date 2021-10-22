import React from 'react';

function ApplePodcast(props) {
  const url = new URL(props.link);
  return (
    <iframe
      allow="encrypted-media"
      frameborder="0"
      height="450"
      width={props.width}
      overflow="hidden"
      background="transparent"
      src={`https://embed.podcasts.apple.com${url.pathname}`}
    ></iframe>
  );
}

export default ApplePodcast;
