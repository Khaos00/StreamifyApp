import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function SearchMovie({ onSearch, onCategorySelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    onCategorySelect(category);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 bg-dark text-light rounded">
      <Row className="align-items-center g-2">
        <Col md={5}>
          <Form.Control
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>

        <Col md={4}>
          <Form.Select onChange={handleCategoryChange} defaultValue="">
            <option value="">Select Category</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
            <option value="27">Horror</option>
            <option value="10749">Romance</option>
            <option value="878">Sci-Fi</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Button type="submit" variant="primary" className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchMovie;
