import React from 'react';

interface AudioProps extends React.AudioHTMLAttributes<HTMLAudioElement> {
  text: string
}

export default function Audio({text}: AudioProps) {
  return (
    <audio src={`${process.env.REACT_APP_FILE_SERVER}/audio/${text}.mp3`} controls className='mx-auto'>
      Your browser does not support the audio element.
    </audio>
  );
}
