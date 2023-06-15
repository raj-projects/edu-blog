import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, CardMedia, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../queries/queries';

function PostDetail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  if (loading) return <Typography variant="h6">Loading...</Typography>;

  if (error)
    return (
      <Typography variant="h6">There is an error : {error.message}</Typography>
    );

  return (
    <>
      {!loading && !error && (
        <Container>
          <Link to="/" align="right">
            Back
          </Link>
          <Box sx={{ marginTop: '20px' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="400"
              image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            />
            <Box sx={{marginTop: '20px'}}>
              <Typography variant="h5">{data.post.name}</Typography>
              <small>{data.post.status}</small>
              <p>{data.post.description}</p>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}

export default PostDetail;
