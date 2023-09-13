import React from "react";
import { Container, Row } from "react-bootstrap";
import TheLordOfRings2 from "./TheLordOfRings2";

const TheLordOfRings1 = ({ Rings }) => (
  <Container>
    <h3 className="text-white text-start mb-2">The Lord of the Rings</h3>
    <Row className="justify-content-center">
      {Rings.slice(0, 6).map((item, key) => {
        // console.log(item);
        return <TheLordOfRings2 data={item} key={item.imdbID} />;
      })}
    </Row>
  </Container>
);

export default TheLordOfRings1;
