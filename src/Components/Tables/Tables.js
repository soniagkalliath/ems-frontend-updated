import React from 'react'
import './Tables.css';
import { Row,Card,Table, Dropdown, NavLink, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Tables() {
  return (
    <>
    <div className="container mt-5">
        <Row>
          <div className="col mt-0">
            <Card className='shadow'>
            <Table className='align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>&nbsp;&nbsp;&nbsp;Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>1</td>
                  <td>Max &nbsp; Miller </td>
                  <td>max@gmail.com</td>
                  <td>M</td>
                  <td className='d-flex align-items-center'>
                  <Dropdown className='text-center'>
                              <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                <Badge bg='primary'>
                                  Active <i class="fa-solid fa-angle-down"></i>
                                </Badge>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Active</Dropdown.Item>
                                <Dropdown.Item >InActive</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                  </td>
                  <td className='img_parent'>
                            <img src='https://www.shareicon.net/data/2016/07/08/116927_man_512x512.png' alt="img" />
                  </td>
                  <td>
                  <Dropdown>
                              <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item >
                                  <Link to={'/profile/1'} className="text-decoration-none">
                                    <i class="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                                  </Link>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                  <Link to={`/edit/1`} className="text-decoration-none">
                                    <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                                  </Link>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                  <div >
                                    <i class="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                                  </div>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                  </td>
                </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  )
}

export default Tables