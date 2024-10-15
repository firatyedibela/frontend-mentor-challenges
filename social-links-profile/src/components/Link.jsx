import React from 'react';

export default function Link({ url, children }) {
  return (
    <a href={url} target="_blank">
      {children}
    </a>
  );
}
