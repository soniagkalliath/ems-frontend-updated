import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.pngkit.com/png/full/208-2086446_group-clipart-self-help-group-group-of-people.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            EMS Application
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header