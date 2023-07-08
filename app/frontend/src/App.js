import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  const [user, setUser] = useState({is_login:false})

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>
                <Nav.Link href="/" active className="text-primary">Brand name</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Item className={"text-light"}>{user.is_login?user.username:""}</Nav.Item>
                    <Nav.Link href={"logout/"}>logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>i

        </Container>
      </Navbar>
    </div>
  );
}

export default App;
