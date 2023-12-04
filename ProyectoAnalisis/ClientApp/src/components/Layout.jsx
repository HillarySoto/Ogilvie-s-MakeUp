import React from 'react';
import Footer from './footer';
import Sidebar from '../sidebarfiles/Sidebar';
import { Container, Row, Col } from 'reactstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <Container className="mt-3">
        <Row className="mt-5">

          <Col sm="12">
            {children}
          </Col>

        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
