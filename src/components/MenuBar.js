import React, {Component} from "react";
import {Menu} from "antd";
import {HomeOutlined,IdcardOutlined,SearchOutlined,InfoCircleOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
class MenuBar extends Component{

    render(){
        return(
            <Menu theme ="dark" defaultSelectedKeys={["home"]} mode={"horizontal"}>

                <Menu.Item key={"home"}><HomeOutlined />
                    <Link to={"/home"}><span>Home</span></Link>
                </Menu.Item>
                <Menu.Item key={"card"}><IdcardOutlined />
                    <Link to={"/patient"}><span>Patient Card</span></Link>
                </Menu.Item>
                <Menu.Item key={"search"}><SearchOutlined />
                    <Link to={"/search"}><span>Search</span></Link>
                </Menu.Item>
                <Menu.Item key={"About"}><InfoCircleOutlined />
                    <Link to={"/about"}><span>About</span></Link>
                </Menu.Item>

            </Menu>
        )
    }
}

export default MenuBar;

