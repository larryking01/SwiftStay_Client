import React, { useState } from 'react'
import 'rsuite/dist/rsuite.min.css'
import { Sidenav, Nav } from 'rsuite'
import { IoListOutline } from 'react-icons/io5'
import { RiAddCircleLine } from 'react-icons/ri'
import { AiOutlineEye } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'





const SidebarComponent = ( ) => {

  const [ expanded, setExpanded ] = useState( true )
  const [ activeKey, setActiveKey ] = useState( true )







  return (
    <>
    <div className='sidebar-parent-div'>
        <Sidenav>
            <Sidenav.Body>
              <Nav>
                <Nav.Menu placement='rightStart' title='Manage rooms' eventKey='1' icon={ <IoListOutline style={{ marginRight: 9 }} /> }>
                    <Nav.Item eventKey='1-1' icon={ <RiAddCircleLine size={ 17 } style={{ marginRight: 9 }} /> }>Add new room</Nav.Item>
                    <Nav.Item eventKey='1-2' icon={ <AiOutlineEye size={ 17 } style={{ marginRight: 9 }} /> }>View all rooms</Nav.Item>
                    <Nav.Item eventKey='1-3' icon={ <FiEdit2 size={ 17 } style={{ marginRight: 9 }} /> }>Edit rooms</Nav.Item>
                </Nav.Menu>

                <Nav.Menu placement='rightStart' title='Manage bookings' eventKey='2' icon={ <IoListOutline style={{ marginRight: 9 }} /> }>
                    <Nav.Item eventKey='2-1' icon={ <RiAddCircleLine size={ 17 } style={{ marginRight: 9 }} /> }>Add new booking</Nav.Item>
                    <Nav.Item eventKey='2-2' icon={ <AiOutlineEye size={ 17 } style={{ marginRight: 9 }} /> }>View all bookings</Nav.Item>
                    <Nav.Item eventKey='2-3' icon={ <FiEdit2 size={ 17 } style={{ marginRight: 9 }} /> }>Edit bookings</Nav.Item>
                </Nav.Menu>

                <Nav.Menu placement='rightStart' title='Manage staff' eventKey='3' icon={ <IoListOutline style={{ marginRight: 9 }} /> }>
                    <Nav.Item eventKey='3-1' icon={ <RiAddCircleLine size={ 17 } style={{ marginRight: 9 }} /> }>Add new staff</Nav.Item>
                    <Nav.Item eventKey='3-2' icon={ <AiOutlineEye size={ 17 } style={{ marginRight: 9 }} /> }>View all staff</Nav.Item>
                    <Nav.Item eventKey='3-3' icon={ <FiEdit2 size={ 17 } style={{ marginRight: 9 }} /> }>Edit staff</Nav.Item>
                </Nav.Menu>

              </Nav>
            </Sidenav.Body>

        </Sidenav>
      
    </div>
    </>


  )

}




export default SidebarComponent