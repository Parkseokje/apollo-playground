import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Movie from '../components/Movie';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// display: flex;
// flex-direction: column;
// align-items: center;
// width: 100%;

const Header = styled.div`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  width: 100%;
  color: white;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  // console.log(loading, error, data);

  return (
    <Container>
      <Header>
        <Title>Movie App</Title>
        <SubTitle>A React App using Apollo</SubTitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {!loading &&
          data &&
          data.movies.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              bg={m.medium_cover_image}
              isLiked={m.isLiked}
            />
          ))}
      </Movies>
    </Container>
  );
};
