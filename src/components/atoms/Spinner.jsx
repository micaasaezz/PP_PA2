import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner() {
  return (
    <CircularProgress 
      style={{
        width: "50px",
        height: "50px",
        margin: "40%"
      }}
    />
  )
}
