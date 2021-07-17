import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";

// FUNCTION (RFC)
// export default function NavBar() {
//     return (
//         <div>
//             <h4>Navbar</h4>
//         </div>
//     )
// }

// CLASS (RCC)
// export default class NavBar extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

export const NavBar = () => {
  return (
    
      <Navbar bg="light" expand="lg" style={{padding:'15px 30px 15px 30px'}}>
        {/* <Container> */}
        <Navbar.Brand href="#home">CRUD React JS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" style={{position:'absolute',right:'30px'}}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

    //   <Row>
    //     <Col>
    //       <Navbar expand="lg">
    //         <Navbar.Brand href="#home">CRUD React JS</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Nav className="mr-auto">
    //             <Nav.Link href="#home">Home</Nav.Link>
    //             <Nav.Link href="#link">Link</Nav.Link>
    //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //               <NavDropdown.Item href="#action/3.2">
    //                 Another action
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="#action/3.3">
    //                 Something
    //               </NavDropdown.Item>
    //               <NavDropdown.Divider />
    //               <NavDropdown.Item href="#action/3.4">
    //                 Separated link
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //           </Nav>
    //           <Form inline>
    //             <FormControl
    //               type="text"
    //               placeholder="Search"
    //               className="mr-sm-2"
    //             />
    //             <Button variant="outline-success">Search</Button>
    //           </Form>
    //         </Navbar.Collapse>
    //       </Navbar>
    //     </Col>
    //     <Col md="auto"></Col>
    //     <Col></Col>
    //     <Col>
    //       <Row>
    //         <Col>
    //           <FormControl
    //             type="text"
    //             placeholder="Search"
    //             className="mr-sm-2"
    //           />
    //         </Col>
    //         <Col>
    //           <Button variant="outline-success">Search</Button>
    //         </Col>
    //       </Row>
    //     </Col>
    //   </Row>
  );
};

export default NavBar;
