import React from 'react'
import { Spinner } from 'react-bootstrap'

function Spinners() {
  return (
    <div className='d-flex justify-content-center m-5'>
        <Spinner animation="border" variant="danger" />
    </div>
  )
}

export default Spinners