import React from 'react'
import { BrowserRouter,Routes, Route, Link } from "react-router-dom"
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap"

import  App from "../../App"
import MyBooks from "../routes/MyBooks"
import CMangas from "../routes/CMangas"
import MyShelving from '../routes/MyShelving'
import Login from '../routes/Login'


export default function Navegation() {
  return (
   <BrowserRouter>
    <Container className="py-3">
      <Navbar bg="light" expand="lg" className="navbar-box">
        <Container>
          <Navbar.Brand >Book Library 📚</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="text-link" to="/home">Home</Link>
                <Link className="text-link" to="/my-books">My Books</Link>
                <Link className="text-link" to="/comics-manga">Comics - Mangas</Link>
                <Link className="text-link" to="/shelving" >Shelving</Link>
                <NavDropdown title="Usuario" id="basic-nav-dropdown" className="dropdown-box">
                  <div className="spance-box">
                      <Link className="text-link" to="/login">Iniciar Session</Link> <br />
                      <Link className="text-link" to="/register-user">Registrar Usuario</Link>
                  </div>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="my-books" element={<MyBooks />} />
          <Route path="comics-manga" element={<CMangas />} />
          <Route path="shelving" element={<MyShelving />} />
          <Route path="login" element={<Login />}/>
      </Routes>
   </BrowserRouter>
  )
}
