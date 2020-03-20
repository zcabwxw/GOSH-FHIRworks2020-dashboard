import React, {Component} from "react";
import PatientCard from "../components/PatientCard";
import {Layout} from "antd";


const {Content} = Layout;


class PatientList extends Component{

    render(){
        const patientExample = {
            name:"Charlie",
            job:"doctor"
        };

        return (
            <Content>
                <PatientCard patientData={patientExample}>
                </PatientCard>
            </Content>
        );
    }
}

export default PatientList;