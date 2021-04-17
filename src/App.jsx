import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.scss";
import "./custom.scss";
import "./App.scss";
import Routes from "./containers/Routes/Routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Routes />
      </div>
      <Navbar />
    </>
  );
}

export default App;
