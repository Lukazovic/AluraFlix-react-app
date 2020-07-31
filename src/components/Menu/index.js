import React from 'react';

import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

import Logo from '../../assets/img/Logo.png';
import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="LucasFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
