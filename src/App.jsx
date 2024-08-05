import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { BrowserRouter as Path, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import PageNotFound from "./PageNotFound";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className=" grid  px-[50px] max-w-screen-2xl mx-auto">
      <Path>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Path>
    </div>
  );
};

export default App;
