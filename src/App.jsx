import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Articles from "./Articles";
import Process from "./Process";
import Contact from "./Contact";
import { useLocalStorage } from './useLocalStorage';
import { useClock } from './useClock';
import WelcomeBanner from "./WelcomeBanner";


const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">TBoDP</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/process">Process</Link>
      <Link to = "/contact">Let's Talk</Link>
    </nav>
    
  );
};

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

function Storage() {
  const [name, setName] = useLocalStorage('name', '');
  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Olá, {name}!</p>
    </>
  )

const currentTime = useClock();

  return (
    <>
      <h2>Hora atual:</h2>
      <p>{currentTime}</p>
    </>
  )
}

export default App;

