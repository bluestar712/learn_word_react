import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {routes} from "appRouter";
import {imageLinks} from "data";

const Welcome: FC = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 md:text-lg'>
      <img src={imageLinks.welcome} alt='welcome'/>
      <h1>Изучение татарского языка в формате мини-игр</h1>
      <Link to={routes.PICK}>
        <button
        >Начать
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
