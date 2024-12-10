import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Navigation() {
  const [auth, setAuth] = useState("");
  const router = useRouter();
  useEffect(() => {
    let isLoggedIn = localStorage.getItem("auth");
    if (isLoggedIn) {
      setAuth(JSON.parse(isLoggedIn));
    } else {
      router.push("/ecommerce");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    router.push("/ecommerce");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link as={Link} href="/home">
              Home
            </Nav.Link>
            {auth?.user ? (
              <NavDropdown
                title={
                  auth.user.role === 1 ? `admin ` : `user${auth.user.name}`
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} href="/dashboard">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} href="/login">
                Login/Signup
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
