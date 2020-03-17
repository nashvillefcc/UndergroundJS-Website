import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => {
    return (
        <Container fluid>
            <Header />
            <div className="">
                {props.children}
            </div>
            <Footer />
        </Container>
    )
}

export default Layout