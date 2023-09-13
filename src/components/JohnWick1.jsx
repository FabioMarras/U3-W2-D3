import React from "react";
import { Container, Row } from "react-bootstrap";
import JohnWick2 from "./JohnWick2";

const JohnWick1 = ({ wick }) => (
  <Container>
    <h3 className="text-white text-start mb-2">John Wick</h3>
    <Row className="justify-content-center">
      {wick.slice(0, 6).map((item, key) => {
        // console.log(item);
        return <JohnWick2 data={item} key={item.imdbID} />;
      })}
    </Row>
  </Container>
);

export default JohnWick1;
