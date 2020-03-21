import React, {Component} from "react";
import {Layout} from "antd";
import background from "../img/background.jpg";
const {Content} = Layout;

class Home extends Component{
    render(){

        return(
            <Content>
                <h1>FHIR Dashboard</h1>
                <img src={background} />
            </Content>
        )
    }

}

export default Home;