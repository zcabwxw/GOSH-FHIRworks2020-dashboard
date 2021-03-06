import React, {Component} from "react";
import "antd/dist/antd.css";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import PatientList from "./pages/PatientList";
import Search from "./pages/Search";
import About from "./pages/About";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Layout} from "antd";
const {Header, Footer, Content} = Layout;

function App(){

    return (
        <div className={"App"}>
            <Layout>
                <Router>
                    <Header>
                        <MenuBar></MenuBar>
                    </Header>
                    <Content>
                        <Switch>
                            <Route path={"/"} exact component={Home} />
                            <Route path={"/patient"} component={PatientList} />
                            <Route path={"/home"} component={Home} />
                            <Route path={"/search"} component={Search} />
                            <Route path={"./about"} component={About} />
                        </Switch>
                    </Content>
                </Router>
            </Layout>
        </div>
    )
}

export default App;