import React from 'react';
import Navbar from './components/Navbar/Navbar'
import BlogTitle from './components/Navbar/Title'
import styled from '@emotion/styled'
import Body from './components/Body/Body'
import Paginations from './components/Pagination/Pagination'
import Footer from './components/Footer/Footer'
import 'antd/dist/antd.css';
import  './App.css'

const API_KEY="4f311b873caa4098b6fefb3dc896f9fe"

const Container=styled.div({
  height:"100vh",
  width:"100vw"
})

function App() {
  return (
     <Container>
       <Navbar/>
       <BlogTitle/>
       <Body/>
       <Paginations/>
       <Footer/>
     </Container>

  );
}

export default App;
