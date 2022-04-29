import React from 'react';
import {Layout, Row, Col} from 'antd';
import { RightSideButton } from "../../Components/RightTool/RightSideButton";

const {Header} = Layout;

export default function MainPage (){
    
    return(
        <div>
            <Header style={{height: 50, backgroundColor: '#1890ff'}}>
                <h3 style={{color: 'white'}}>Test Module</h3>
            </Header>

            <Row>
                <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                    Problem Area
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                    <RightSideButton/>
                </Col>

            </Row>
        </div>
    )
}