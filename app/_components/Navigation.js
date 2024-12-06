import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Navigation() {
  const [auth, setAuth] = useState("a");
  const router = useRouter();
  useEffect(() => {
    let isLoggedIn = localStorage.getItem("auth");
    if (isLoggedIn) {
      setAuth(JSON.parse(isLoggedIn));
    } else {
      router.push("/ecommerce");
    }
  }, []);
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 ">
            <Link href={"/home"} className="nav-link">
              Home
            </Link>
            {auth.user ? (
             (
              <NavDropdown title={auth.user.name} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <Link href={""} className="nav-link"> dashboard </Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>logout 
              </NavDropdown.Item>
            </NavDropdown>
             )
            ) : (
              <Link href="#" className="nav-link">
                Login/signup
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
