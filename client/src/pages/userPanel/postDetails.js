import React from 'react';
import { Stack } from '@mui/system';
import { Box, CardMedia } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../gql_queries/postQueries';

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>It's Loading </p>;
  if (error) return <p>There is an error : {error.message} </p>;

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        flexWrap: 'wrap',
      }}
    >
      {data.post.map((post) => {
        return (
          <>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
            />
            <Box>
              <h1>{post.name}</h1>
              <p>{post.description}</p>
            </Box>
          </>
        );
      })}
    </Stack>
  );
};

export default Home;
