import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Movies from './Movies';
import NotFound from './NotFound';
import CardDetails from './CardDetails';
import Search from './Search';
import { CarouselImage } from './Carousel';




export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:id" element={<CardDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/carouselimage" element={<CarouselImage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}




