import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to="/">
          TV Shows
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default Toolbar;