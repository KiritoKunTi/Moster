import React from "react";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import MainPage from './pages/MainPage'
import PostsPage from './pages/PostsPage'
import PostPage from './pages/PostPage'
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AddPostPage from "./pages/AddPostPage";
import EditPostPage from "./pages/EditPostPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/posts" element={<PostsPage/>} />
        <Route path=':id' element={<PostPage/>} />
        <Route path='/new' element={<AddPostPage/>} />
        <Route path=':id/edit' element={<EditPostPage/>} />

      </Routes>
    </Layout>
  );
}

export default App;
