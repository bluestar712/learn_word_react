import {Button, Layout, Menu, Row, Typography} from "antd";
import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {RouteNames} from "../router";

const Navbar: FC = () => {

    return (
        <Layout.Header>
            <Row justify="space-between">
                <Menu>
                    <Link to={RouteNames.MAIN}
                    >
                        <Button type={'link'} size={"large"} style={{fontSize:20, fontWeight: 'bold'}}>Chamala</Button>
                    </Link>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
