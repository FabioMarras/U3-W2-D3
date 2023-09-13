import { NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header className="d-flex justify-content-between container mt-3">
      <div className="d-flex">
        <h2 className="text-white">TV Shows</h2>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="ms-4 text-white ">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
        </NavDropdown>
      </div>
    </header>
  );
};

export default Header;
