import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from "./components/containers/Layout";
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import ScrollToTop from './components/navigation/ScrolToTop';

//About Pages
import AboutUs from './pages/About/AboutUs';
import OurHistory from './pages/About/OurHistory';
import OurSolution from './pages/About/OurSolution';

//Single Pages
import Contact from './pages/Contact';
import Resources from './pages/Resources';

function App() {

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home/>}/>

          {/* About Sections */}
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/ourhistory" element={<OurHistory/>}/>
          <Route exact path="/oursolution" element={<OurSolution/>}/>
          <Route exact path="*" element={<NoPage/>}/>

          {/* Contact */}
          <Route exact path="/contactus" element={<Contact/>}/>

          {/* Resources */}
          <Route exact path="/resources" element={<Resources/>}/>

        </Routes>
      </Layout>
    </>
  );
}


export default App;