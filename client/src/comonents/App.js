import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/userPanel/About';
import Home from '../pages/userPanel/Home';
import Categories from '../pages/userPanel/Categories';
import Contact from '../pages/userPanel/Contact';
import Dashboard from '../pages/adminPanel/Dashboard';
import UsersList from '../pages/adminPanel/components/users/UsersList';
import AddUser from '../pages/adminPanel/components/users/AddUser';
import PostsList from '../pages/adminPanel/components/posts/PostsList';
import AddPost from '../pages/adminPanel/components/posts/AddPost';
import CategoryList from '../pages/adminPanel/components/categories/CategoryList';
import AddCategory from '../pages/adminPanel/components/categories/AddCategory';
import Posts from '../pages/userPanel/Posts';
import PageNotFound from '../pages/userPanel/PageNotFound';
import PostDetail from '../pages/userPanel/PostDetail';

function App() {
  return (
    <>
      <Box>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Posts />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="about" element={<About />} />
            <Route path="category" element={<Categories />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index path="userlist" element={<UsersList />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="postlist" element={<PostsList />} />
            <Route path="addpost" element={<AddPost />} />
            <Route index path="categorieslist" element={<CategoryList />} />
            <Route path="addcategory" element={<AddCategory />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
