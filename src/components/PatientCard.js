import React, {Component} from "react";
import {Card} from "antd";

class PatientCard extends Component{
    constructor(props) {
        super(props);
        this.state = {value:null};
    }
    render(){
        const {patientData} = this.props;
        return(
            <Card title = {patientData.name} extra = {<a href={"#"}>View data</a>}
                  style = {{width:300}}>
                {patientData && (
                    <div>
                        <p>{patientData.name}</p>
                        <p>{patientData.job}</p>
                    </div>
                )}

            </Card>


        )
    }
}

export default PatientCard;