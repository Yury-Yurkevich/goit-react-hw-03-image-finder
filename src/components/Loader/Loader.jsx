import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="Loader">
      <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="180"
        visible={true}
      />
    </div>
  );
}