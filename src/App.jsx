import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import SingleBlog from "./components/SingleBlog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;