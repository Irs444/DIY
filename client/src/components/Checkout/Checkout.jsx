import React, { useEffect, useRef, useState } from 'react';
import { Container, Button, Card, Form, FormGroup, FormLabel } from 'react-bootstrap';
import * as Yup from 'yup';
import { loadStripe } from '@stripe/stripe-js';
import PaymentGateway from './PaymentGateway';
import { Elements } from '@stripe/react-stripe-js';
import useCartContext from '../../context/ProductContext';

import './Checkout.css';
import useUserContext from '../../context/UserContext';

const appearance = {
    theme: "day",
  };

const CheckoutSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    pincode: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
});

function Checkout() {
    const [clientSecret, setClientSecret] = useState('');
    const { getCartItemsCount,  getCartTotal ,cartItems } = useCartContext();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    // console.log(currentUser);
    const addressRef = useRef();
    const pincodeRef = useRef();
    const contactRef = useRef();
    
    const stripePromise = loadStripe('pk_test_51N5i2kSE8ALNlcfUtgUUY9EuKBo2R5jT2xc1SmEreUZA03N6EJC4ReRHCClCD6XNR75gBTQ5SwC6az8iE18w1OaQ00UeK2oh7O');
    const getPaymentIntent = async () => {
        const shipping = {
            name: currentUser.name,
            address: {
                line1: addressRef.current.value,
                postal_code: pincodeRef.current.value,
                country: 'IN',
            },
        };
        sessionStorage.setItem('shipping', JSON.stringify(shipping));
        // console.log(getCartTotal());
        const res = await fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: getCartTotal(),
                customerData: shipping
            })
        });
        const data = await res.json();
        console.log(data);
        setClientSecret(data.clientSecret);
    };

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Product Details</Card.Title>
                    <hr />
                    {cartItems.map(item => (
                        <div key={item.id}>
                            {/* <img src={${process.env.NEXT_PUBLIC_API_URL}/${item.image[0]}} alt={item.name} width={50} /> */}
                            <div>
                                <p>{item.pname}</p>
                                <p>Items : {getCartItemsCount()}</p>
                            </div>
                            <div>
                                <p>Total : ₹{getCartTotal()}</p>
                            </div>
                        </div>
                    ))}
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Delivery Address</Card.Title>
                    <hr />
                    <Form>
                        <FormGroup>
                            <FormLabel>Pin Code</FormLabel>
                            <Form.Control ref={pincodeRef} type="number" maxLength={6} minLength={6} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Contact</FormLabel>
                            <Form.Control ref={contactRef} type="text" maxLength={10} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Shipping Address</FormLabel>
                            <Form.Control ref={addressRef} style={{border:"1px solid gray"}} as="textarea" rows={8} />
                        </FormGroup>
                    </Form>
                </Card.Body>
            </Card>
            <Button variant="primary" onClick={getPaymentIntent}>Pay Now</Button>
            {clientSecret && (
                <Elements stripe={stripePromise} options={{
                    clientSecret,
                    appearance
                }}>
                    <PaymentGateway email={currentUser.email} />
                </Elements>
            )}
        </Container>
    );
}

export default Checkout;