import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';


const Kart = () => {
    const [show, setShow] = useState(false);

 

  return (
    <>
      <Button variant="dark" onClick={()=>setShow(!show)} className="me-2 position-relative" >
      <i class="bi bi-bag-check-fill"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    13
    <span class="visually-hidden">Cart Items</span>
  </span>
      </Button>
      <Offcanvas show={show} onHide={()=>setShow(!show)} placement='end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Orders/>
         <div className='text-end mt-3'>
            <Button variant='danger' onClick={()=>setShow(false)}>Check Out</Button>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Kart