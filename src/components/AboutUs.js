import React from "react";
import { Container } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center fw-bold">About Streamify</h2>
      <p className="lead text-center">
        Streamify is a simple React-based movie search app built using the OMDB
        and TMDb APIs. It allows users to explore movies by title and view the
        latest releases currently in theaters.
      </p>
      <p className="text-center">
        The project demonstrates React fundamentals such as components, hooks,
        props, event handling, conditional rendering, and API integration — all
        styled with React Bootstrap.
      </p>
      <p className="text-center mt-4">
        <strong>Developed by:</strong> Mohammed Issa <br />
        <strong>Course:</strong> Full Stack Development - React Module
      </p>
    </Container>
  );
}

export default AboutUs;
