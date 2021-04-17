import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.scss";
import "./custom.scss";
import "./App.scss";
import Routes from "./containers/Routes/Routes";
import { Link } from "@reach/router";
import Navbar from "./components/Navbar";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Routes />
      <Navbar/>
    </>
  );
}

export default App;
