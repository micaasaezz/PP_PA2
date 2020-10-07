import React from 'react';
import "../styles/PokeStyles.css";

export default function Title({ title, className }) {
  return (
    <h4 className={className ? className : "titles"}>{title}</h4>
  )
}
