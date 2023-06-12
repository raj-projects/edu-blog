import React from 'react';
import { Grid, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader';
import PageNotFound from '../userPanel/PageNotFound';
import Users from './pages/users/Users';
import AddUser from './pages/users/AddUser';
import Posts from './pages/posts/Posts';
import AddPost from './pages/posts/AddPost';
import Categories from '../userPanel/Categories';
import AddCategory from './pages/categories/AddCategory';
import Footer from '../../comonents/layout/Footer';

function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <Container sx={{ marginTop: '80px' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* <Sidebar /> */}
          </Grid>
          <Grid item xs={8}>
            <Routes>
              <Route path="dashboard/" element={<Dashboard />}>
                <Route path="users" element={<Users />}>
                  <Route path="adduser" element={<AddUser />} />
                </Route>
                <Route path="posts" element={<Posts />}>
                  <Route path="addpost" element={<AddPost />} />
                </Route>
                <Route path="category" element={<Categories />}>
                  <Route path="addcategory" element={<AddCategory />} />
                </Route>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
