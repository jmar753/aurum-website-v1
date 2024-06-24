import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from "./components/containers/Layout";
import NoPage from './pages/NoPage';
import Home from './pages/Home';

//About Pages
import AboutUs from './pages/About/AboutUs';
import OurHistory from './pages/About/OurHistory';
import OurSolution from './pages/About/OurSolution';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home/>}/>

          {/* About Sections */}
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/ourhistory" element={<OurHistory/>}/>
          <Route exact path="/oursolution" element={<OurSolution/>}/>
          <Route exact path="*" element={<NoPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;