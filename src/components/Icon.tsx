import {imageLinks} from "data";
import React from 'react';

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  correct: boolean
}

export default function Icon({correct}: IconProps) {
  return (
    <img src={correct ? imageLinks.happy : imageLinks.sad}
         alt='status'
         width={90}
         height={90}
    />
  );
}
