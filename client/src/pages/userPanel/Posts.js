import React from 'react';
import { Stack } from '@mui/system';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import Spinner from '../../comonents/shared/Spinner';
import { GET_POSTS } from '../../queries/queries';
import { Link } from 'react-router-dom';

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Spinner />;
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
      {data.posts.map((post) => {
        return (
          <Card key={post.id} sx={{ maxWidth: '300px', width: '100%' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link to={`/posts/${post.id}`}>{post.name}</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.description}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        );
      })}
    </Stack>
  );
};

export default Posts;
