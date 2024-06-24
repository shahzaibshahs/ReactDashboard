import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
function Header() {

  const user = JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div>
      
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
            {
              localStorage.getItem('user-info') ?
              <>
                <Link to="/add-product">Add Product</Link>
                <Link to="/update-product">Update Product</Link>
                <Link to="/product-list">Product List</Link>
                <Link to="/search">Search</Link>

              </>
              :
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            }
        </Nav>

        {/* Logout */}

        {localStorage.getItem('user-info') ?
          <Nav>
            <NavDropdown title={user.name}>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :null
        }
      </Navbar>
    </div>
  );
}

export default Header;
