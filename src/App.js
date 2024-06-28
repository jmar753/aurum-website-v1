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

//Products Pages
import Products from './pages/Products/Products';
import BTR from './pages/Products/BTR';
import CFC from './pages/Products/CFC';
import DDR from './pages/Products/DDR';
import DTR from './pages/Products/DTR';
import MHR from './pages/Products/MHR';

//Single Pages
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Blog from './pages/Blog';

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

          {/* Blog */}
          <Route exact path="/blog" element={<Blog/>}/>

          {/* Contact */}
          <Route exact path="/contactus" element={<Contact/>}/>

          {/* Resources */}
          <Route exact path="/resources" element={<Resources/>}/>

          {/*Products)*/}
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/btr-series" element={<BTR/>}/>
          <Route exact path="/cfc-series" element={<CFC/>}/>
          <Route exact path="/ddr-series" element={<DDR/>}/>
          <Route exact path="/mhr-series" element={<MHR/>}/>
          <Route exact path="/dtr-series" element={<DTR/>}/>

          {/* No Page */}
          <Route exact path="*" element={<NoPage/>}/>

        </Routes>
      </Layout>
    </>
  );
}


export default App;