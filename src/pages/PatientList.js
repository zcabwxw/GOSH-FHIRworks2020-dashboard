import React, {Component} from "react";
import PatientCard from "../components/PatientCard";
import {Layout} from "antd";

const {Content} = Layout;


class PatientList extends Component{

    render(){
        const patient1 = {
            name:"Charlie",
            job:"doctor"
        };


        return (
            <Content>
                <PatientCard patientData={patient1}></PatientCard>

            </Content>

        );
    }
}

export default PatientList;