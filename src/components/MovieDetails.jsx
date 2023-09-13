import { useState, useEffect } from "react";
import { Alert, Badge, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyNavbar from "./NavBar";
import MovieComments from "./MovieComments";

const MovieDetails = () => {
  const params = useParams();

  const [movieData, setMovieData] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=cfec1550&i=${params.movieId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setMovieData(data);
    } catch (error) {
      console.log("Error fetching movie data:", error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [params.movieId]);

  return (
    <>
      {movieData ? (
        <>
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={10}>
                <img
                  src={movieData.Poster}
                  alt=""
                  width="300"
                  className="mt-5"
                  style={{ objectFit: "cover", maxWidth: "100%" }}
                />
                <h1 className="display-4">{movieData.Title}</h1>
                <p>Year: {movieData.Year}</p>
                <p className="fs-4">Genre: {movieData.Genre}</p>
                <p>{movieData.Plot}</p>

                {/* <MovieComments movie={movieData} /> */}
              </Col>
            </Row>
          </Container>
        </>
      ) : typeof movieData === "undefined" ? (
        <Alert variant="danger">Film non trovato! Tornerai alla home page</Alert>
      ) : (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};
export default MovieDetails;
