import React, {PropsWithChildren} from 'react';
import Toolbar from "../Toolbar/Toolbar";
import {Col, Container, Row} from 'react-bootstrap';
import SearchForm from '../SearchForm/SearchForm';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Container>
          <Row>
            <Col/>
            <Col sm={10}>
              <SearchForm/>
              {children}
            </Col>
            <Col/>

          </Row>
        </Container>
      </main>
    </>
  );
};

export default Layout;