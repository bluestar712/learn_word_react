import {ReactComponent as HappyIcon} from 'assets/happy.svg';
import {ReactComponent as SadIcon} from 'assets/sad.svg';
import React from 'react';

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  correct: boolean
}

const props = {
  width: 90,
  height: 90
}
const Fox = ({correct}: { correct: boolean }) => correct ? <HappyIcon {...props} /> : <SadIcon {...props} />

export default function Icon({correct}: IconProps) {

  return (
    <Fox correct={correct} {...props} />
  );
}
