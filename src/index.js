import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js"


class Web extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <App />
            </div>
        )
    }
}

ReactDOM.render(<Web />, document.getElementById("root") );