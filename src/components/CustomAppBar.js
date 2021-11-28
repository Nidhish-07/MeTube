import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
const CustomAppBar = ({ isSearchVisible = false, onSearch }) => {
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <img src="../logo.svg" alt="logo" height={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search on OurTube"
              aria-label="search on our tube"
              aria-describedby="basic-addon2"
              onChange={onSearch}
            />
            <Button variant="danger" type="submit">
              Search
            </Button>
            <Button variant="outline-light" href="/license">
              License
            </Button>
          </InputGroup>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomAppBar;
