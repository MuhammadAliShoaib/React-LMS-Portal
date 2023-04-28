import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SMDropdown from "./SMDropdown";

function SMNavbar(props) {

  const { title, bg, links, sticky, dropdowns, buttonVariant,buttonText } = props

  return (
    <Navbar sticky={sticky} bg={bg ? bg : "light"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

            {
              links && Array.isArray(links) && links.length > 0 ?
                links.map((e, i) => {
                  return (
                    <Nav.Link key={i} href={e.reference}>{e.displayName}</Nav.Link>
                  )
                }) : null
            }

            <SMDropdown dropdowns={dropdowns}/>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant={buttonVariant ? buttonVariant : "outline-success"}>{buttonText}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SMNavbar;
