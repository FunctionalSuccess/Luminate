import React from 'react';

function Spotify(props) {
  const url = new URL(props.link);
  return (
    <iframe
      src={`https://open.spotify.com/embed-podcast${url.pathname}`}
      width={props.width}
      height={props.height}
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

export default Spotify;
