import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function SearchMovie({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() === "") return;
    onSearch(term);
  };

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search Here for Your Favorite Movie..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="text-primary fw-bold"
            />
          </Col>
          <Col md="auto">
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchMovie;
