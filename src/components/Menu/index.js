import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

import Logo from '../../assets/img/Logo.png';
import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="LucasFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/new/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
