import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.scss";
import "./custom.scss";
import "./App.scss";
import Routes from "./containers/Routes/Routes";
import { Link } from "@reach/router";

function App() {
  return (
    <>
      <Routes />
      <Link to={"/"}>
        <p>Landing</p>
      </Link>
      <Link to={"/listings"}>
        <p>Listings</p>
      </Link>
      <Link to={"/donate"}>
        <p>Donate</p>
      </Link>
    </>
  );
}

export default App;
