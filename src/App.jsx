import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { BrowserRouter as Path, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import PageNotFound from "./PageNotFound";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import AllProjects from "./Components/AllProjects";
import { Provider as ThemeProvider } from "./Context/Provider";

const App = () => {
  return (
    <ThemeProvider>
      <div className=" grid relative px-[50px] max-w-screen-2xl mx-auto">
        <Path>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/allprojects" element={<AllProjects />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Path>
      </div>
    </ThemeProvider>
  );
};

export default App;
