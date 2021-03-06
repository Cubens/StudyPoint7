import React from "react"
import {Route, Switch } from "react-router-dom"
import Login from "./Login";
import Logout from "./Logout";
import About from "./About";
import UserPage from "./UserPage";
import RandomNumber from "./RandomNumber";
import AdminPage from "./AdminPage";
import UserList from "./UserList";
import TopMenu from "./TopMenu";


function App() {
  return (
    <div>
      <TopMenu />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/about" component={About} />
        <Route path="/user" component={UserPage} />
        <Route path="/userlist" component={UserList} />
        <Route path="/random" component={RandomNumber} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  )
}
export default App;