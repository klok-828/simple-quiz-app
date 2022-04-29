
import React from 'react';
import {Card, Row, Button} from 'antd';

export const RightSideButton = () => {
    return(
        <Card style={{margin: 20}}>
            <Row>Problem: 1/10</Row>
            <Row style={{margin: 20}}>
                <Button type="primary">Submit Answer</Button>
                {/*<Button type="primary">Next Problem</Button>*/}
            </Row>
        </Card>
    )
};
