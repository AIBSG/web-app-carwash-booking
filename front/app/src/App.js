import logo from './logo.svg';
import './App.css';
import SelectionPage from "./SelectionPage/SelectionPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import SettingsPage from "./SettingsPage/SettingsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
          <RegistrationPage/>
          {/*<SettingsPage/> */}
          {/*<SelectionPage/> */}
          {/*<SelectionPage/> */}
      </div>
  );
}

export default App;
