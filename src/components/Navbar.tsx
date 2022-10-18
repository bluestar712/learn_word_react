import React, {FC} from 'react';
import {Link} from 'react-router-dom';

const Navbar: FC = () => {

    return (
        <header className={'flex items-center p-4 text-green font-bold'}>
            <Link to={'/'}
            >Chamala
            </Link>
        </header>
    );
};

export default Navbar;
