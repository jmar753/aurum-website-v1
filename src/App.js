import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from "./components/containers/Layout";
import NoPage from './pages/NoPage';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="*" element={<NoPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;