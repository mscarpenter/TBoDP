import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NavigationBar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

