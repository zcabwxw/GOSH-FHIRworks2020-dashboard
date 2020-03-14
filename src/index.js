import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Web extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <App />;
            </div>
        )
    }
}

ReactDOM.render(<Web />, document.getElementById("root") );