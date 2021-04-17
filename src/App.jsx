import 'bootstrap/dist/css/bootstrap.css';
import styles from './App.module.scss';
import "./custom.scss";
import DonatePage from "./containers/DonatePage/index.js";
import ReserveFormPage from "./containers/ReserveFormPage/index.js";
import DonateComplete from "./containers/DonateComplete/index.js";

function App() {
  return (
    <div>
      {/* <ReserveFormPage/> */}
      <DonatePage/>
      {/* <DonateComplete/> */}
    </div>
  );
}

export default App;
