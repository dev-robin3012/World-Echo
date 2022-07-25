import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { QueryContext } from "../App";

const navItems = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Sports",
  "Science",
  "Technology",
  "Politics",
  "World",
  "Opinion",
  "Life Style",
];

const NavBar = () => {
  const [query, setQuery] = useContext(QueryContext);

  return (
    <>
      <Navbar bg="dark" sticky="top" expand="lg" className="px-md-5 d-flex">
        <Navbar.Brand
          href="#"
          className="text-light d-flex align-items-center"
          onClick={() => setQuery({ ...query, category: "" })}
        >
          <h2 className="m-0">W</h2>
          <img src="/world.gif" alt="" height={28} />
          <h2 className="m-0">RLD ECHO</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-light ">
            {navItems.map((item, key) => (
              <Nav.Link
                href={`#${item}`}
                key={key}
                onClick={() => setQuery({ category: item, pageSize: 10 })}
                className="text-light text-center text-underline"
              >
                {query.category === item ? <u>{item}</u> : item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
