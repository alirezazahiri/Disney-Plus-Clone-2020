import React from "react";
import { Link } from "react-router-dom";

// Styled Components
import { Content, Container, Wrap } from "../common/Wrap";

// Custom Hooks
import useMovies from '../../hooks/useMovies';

const NewDisneys = () => {
  const movies = useMovies("newDisneys")

  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default NewDisneys;
