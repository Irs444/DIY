import React, { useEffect, useRef, useState } from 'react';
import { Button, Container } from 'react-bootstrap'; // Assuming you're using Bootstrap components
import { IconCircleX } from '@tabler/icons-react';
import { useSearchParams, Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
// import Navbar from './Navbar';
import { IconCircleCheck } from '@tabler/icons-react';
import useProductContext from '../../context/ProductContext';
// import useCartContext from '../Context/CartContext';

const ThankYou = () => {
    const hasRun = useRef(false);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [params] = useSearchParams();
    const { cartItems, clearCart } = useProductContext();

    const savePayment = async () => {
        const paymentDetails = await retrievePaymentIntent();
        const response = await fetch('http://localhost:5000/order/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: currentUser._id,
                items: cartItems,
                details: paymentDetails,
                intentId: params.get('payment_intent'),
                items: cartItems,
                shipping: JSON.parse(sessionStorage.getItem('shipping'))
            })
        });
        console.log(response.status);
        if (response.status === 200) {
            sessionStorage.removeItem('cartItems');
            sessionStorage.removeItem('shipping');
            clearCart();
        }
    };

    const retrievePaymentIntent = async () => {
        const response = await fetch("http://localhost:5000/retrieve-payment-intent", {
            method: 'POST',
            body: JSON.stringify({ paymentIntentId: params.get('payment_intent') }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.status);
        const data = await response.json();
        // console.log(data);
        return data;
    };

    useEffect(() => {
        if (!hasRun.current) {
            hasRun.current = true;
            if (params.get('redirect_status') === 'succeeded' && sessionStorage.getItem('shipping')) {
                savePayment();
            }
        }
    }, []);

    return (
        <div>
            {/* <Navbar /> */}
            <Container fluid="md">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', flexDirection: 'column' }}>
                    {
                        params.get('redirect_status') === 'succeeded' ?
                            <>
                                <IconCircleCheck size={100} color={'green'} />
                                <div style={{ textAlign: 'center', padding: '50px' }}>
                                    <h1 style={{ color: '#4CAF50' }}>Thank You For Your Purchase!</h1>
                                    <p style={{ fontSize: '18px' }}>Your order has been placed successfully.</p>
                                    <p style={{ fontSize: '18px' }}>We've sent a confirmation email to your email address.</p>
                                </div>
                                <Button variant='primary' style={{ marginTop: '20px' }} as={Link} to="/">Go to Home</Button>
                            </>
                            :
                            <>
                                <IconCircleX size={100} color={'red'} />
                                <h2>Payment Failed</h2>
                                <p>Your payment was not successful. Please try again.</p>
                                <p>If the problem persists, please contact us.</p>
                                <Button variant='primary' style={{ marginTop: '20px' }} as={Link} to="/">Go to Home</Button>
                            </>
                    }
                </div>
            </Container>
        </div>
    );
};

export default ThankYou;