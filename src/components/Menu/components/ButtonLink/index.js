import React from 'react';

// import { Container } from './styles';

function ButtonLink({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

export default ButtonLink;
