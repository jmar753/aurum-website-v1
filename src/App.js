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

//Single Pages
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import { RetrofitDetails } from './components/RetrofitDetails';
import TextOverlapColorChange from './pages/Test';

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
          <Route exact path="/products/:retrofitId" element={<RetrofitDetails/>}/>

          {/* Test */}
          <Route exact path="/test" element={<TextOverlapColorChange/>}/>

          {/* No Page */}
          <Route exact path="*" element={<NoPage/>}/>

        </Routes>
      </Layout>
    </>
  );
}


export default App;