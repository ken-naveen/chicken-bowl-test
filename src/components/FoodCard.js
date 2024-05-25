import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FoodCard1 from './FoodCard1';
import SideNav1 from './SideNav1';

const FoodCard = () => {
  // It is for the side nav 
  
  // Below useState is for modal
  const [modalShow, setModalShow] = useState(false); 

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4 className='text-success'>Order is Placed!</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your order is on the way. While food is on delivery, we have special offers. Please redeem them now.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <section className='bg-white pt-3 section-with-sidebar'>
        <SideNav1 /> {/* Adding the sidebar inside this section */}
        <Container>
          <div className='text-center'>
            <h2 className='text-danger my-3 py-5 display-4'>Choose wisely! <i className="bi bi-balloon-heart"></i></h2>
          </div>
          <br />
          <div className='text-center mb-5'>
            <h3 className='display-5 text-black'>Starters!</h3>
            <hr />
          </div>
          <Row>
            <Col md={6} lg={4}>
              <Card className='m-3 '>
                <Card.Img variant="top" src={require('../Assets/bbq2.jpg')} />
                <Card.Body>
                  <Card.Title className='text-danger fw-bold'>Barbeque Chicken (4 pcs)</Card.Title>
                  <Card.Text>
                    <h4 className='text-black'> ₹ 499</h4>
                    Well smoked Barbeque chicken and three varieties of sauces will be packed. Grilled with cheese and butter to enhance the flavor.
                  </Card.Text>
                  <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
                </Card.Body>
              </Card>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
            <Col md={6} lg={4}>
              <Card className='m-3 '>
                <Card.Img variant="top" src={require('../Assets/fried1.jpg')} />
                <Card.Body>
                  <Card.Title className='text-danger fw-bold'>Fried Chicken</Card.Title>
                  <Card.Text>
                    <h4 className='text-black'>₹ 400</h4>
                    An Authentic Fried chicken cooked by top chefs, comes with two types of sauces and chili flakes with complimentary added cheese.
                  </Card.Text>
                  <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
                </Card.Body>
              </Card>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
            <Col md={6} lg={4}>
              <Card className='m-3 '>
                <Card.Img variant="top" src={require('../Assets/tandoor.jpg')} />
                <Card.Body>
                  <Card.Title className='text-danger fw-bold'>Chicken Tandoori (5 pcs)</Card.Title>
                  <Card.Text>
                    <h4 className='text-black'> ₹ 550</h4>
                    Tandoori chicken with mint chutney and mayonnaise will be packed. For additional mayonnaise, extra charges will apply. Prepared by an authentic tandoor kitchen.
                  </Card.Text>
                  <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
                </Card.Body>
              </Card>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
            <Col md={6} lg={4}>
              <Card className='m-3 '>
                <Card.Img variant="top" src={require('../Assets/chilli1.jpg')} />
                <Card.Body>
                  <Card.Title className='text-danger fw-bold'>Chilli Chicken</Card.Title>
                  <Card.Text>
                    <h4 className='text-black'> ₹ 299</h4>
                    Chinese style chilli chicken with lemon and onion will be packed. Prepared with a secret hot sauce exclusive for this dish. Extra charges apply for additional toppings.
                  </Card.Text>
                  <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
                </Card.Body>
              </Card>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
            <Col md={6} lg={4}>
              <Card className='m-3 '>
                <Card.Img variant="top" src={require('../Assets/soup1.jpg')} />
                <Card.Body>
                  <Card.Title className='text-danger fw-bold'>Chicken Pasulere Soup</Card.Title>
                  <Card.Text>
                    <h4 className='text-black'> ₹ 380</h4>
                    Chicken pasulere soup from an authentic Spanish recipe and chefs. Contains spices and chicken broth as traditional pasulere. Chilli flakes and pepper will be complimentary.
                  </Card.Text>
                  <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
                </Card.Body>
              </Card>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
            <Col md={6} lg={4}>
              <Card className='m-3 '>
                <Card.Img variant="top" src={require('../Assets/images.jpg')} />
                <Card.Body>
                  <Card.Title className='text-danger fw-bold'>Peri Peri Chicken</Card.Title>
                  <Card.Text>
                    <h4 className='text-black'> ₹ 499</h4>
                    Peri peri chicken with mint chutney and mayonnaise will be packed. For additional mayonnaise, extra charges will apply. Prepared by authentic western chefs and made with traditional honey sauce.
                  </Card.Text>
                  <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
                </Card.Body>
              </Card>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
            <Col md={6} lg={4}>
              <Card className='m-3 '>
                <Card.Img variant="top" src={require('../Assets/bbq1.jpg')} />
                <Card.Body>
                  <Card.Title className='text-danger fw-bold'>Smokey Chicken</Card.Title>
                  <Card.Text>
                    <h4 className='text-black'> ₹ 630</h4>
                    Smokey chicken with special honey sauce and mayonnaise will be packed. For additional mayonnaise, extra charges will apply. Smoked by natural charcoal and butter.
                  </Card.Text>
                  <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
                </Card.Body>
              </Card>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
        </Container>
        <FoodCard1 />
        <br />
      </section>
    </div>
  );
};

export default FoodCard;
