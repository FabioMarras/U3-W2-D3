import React from "react";
import Harry2 from "./Harry2";
import { Container, Row } from "react-bootstrap";

const Harry1 = ({ harry }) => (
  <Container>
    <h3 className="text-white text-start mb-2">Harry Potter</h3>
    <Row className="justify-content-center">
      {harry.slice(0, 6).map((item, key) => {
        // console.log(item);
        return <Harry2 data={item} key={item.imdbID} />;
      })}
    </Row>
  </Container>
);

export default Harry1;
