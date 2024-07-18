import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const SearchForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3 mt-5">
        <Row>
          <Form.Label column="lg"  md={4}>
            Search for TV Show:
          </Form.Label>
          <Col>
            <Form.Control size="lg" type="text" placeholder="Search" />
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;