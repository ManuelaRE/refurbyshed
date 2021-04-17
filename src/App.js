import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from "./components/LandingPage";
import WhatWeDo from "./components/WhatWeDo";
import About from "./components/About";

function App() {
  return (
    <>
      <LandingPage/>
      <WhatWeDo/>
      <About/>
    </>
  );
}

export default App;
