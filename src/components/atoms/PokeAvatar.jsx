import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "../styles/PokeStyles.css";

export default function PokeAvatar({ alt, src }) {
  return (
    <Avatar 
      alt={alt}
      src={src} 
      className={"poke-avatar"}
    />
  )
}
