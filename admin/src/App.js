import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {userInputs, productInputs} from "./fromSource.js";
import { DarkModeContext } from "./context/darkModeContext";
import {useContext} from "react";
import "./style/dark.scss"

function App() {

  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path = "/">
            <Route index element = {<Home/>}/>
            <Route path = "login" element = {<Login/>}/>
            <Route path = "users">
              <Route index element = {<List/>}/>
              <Route path = ":userId" element = {<Single/>}/>
              <Route path = "new" element = {<New inputs = {userInputs} title = "Add New User"/>}/>
            </Route>
            <Route path = "products">
              <Route path = ":productId" element = {<Single/>}/>
              <Route path = "new" element = {<New inputs = {productInputs} title = "Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
