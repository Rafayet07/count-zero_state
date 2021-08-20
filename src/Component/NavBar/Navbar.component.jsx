import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const NavBar=(props)=>{
  return(
    <nav className="navbar navbar-expand-xxl navbar-light bg-light">
        <div className="container-lg">
          <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>

              <Button variant="light"> {props.nonZeroItems}</Button>
            </Container>
          </Navbar>
        </div>
      </nav>
  )
}
export default NavBar;