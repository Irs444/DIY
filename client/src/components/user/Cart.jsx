import React from 'react'
import useProductContext from "../../context/ProductContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        isInCart,
        getCartTotal,
        getCartItemsCount,
      } = useProductContext();

      const displayCartItems = () => {
        if (getCartItemsCount() === 0) return (
          <div className="text-center">
            {/* <MDBCardImage src={'/cart.png'} alt="login form" className='rounded-start mt-4 w-25 text-center' /> */}
            <h3>Your Cart is Currently Empty!</h3>
            <p className="text-muted">Before proceed to checkout you must add some products to your shopping cart. <br />You will fill a lot of interesting products on our "Product" page.</p>
            <Link className="btn rounded-pill" style={{ backgroundColor: "#4BCCF2", color: "#fff" }} to={"/user/product"}>Return To Shop</Link>
          </div>
        );
        return cartItems.map((item) => (
          <div key={item._id} className="row mb-3">
            <div className="col-2">
              <div
                className="cart-item-placeholder"
                style={{
              
                backgroundImage:`url('http://localhost:5000/${item.image}')`,
    
                }}
              ></div>
    
            </div>
            <div className="col-7">
              {/* <p className="text-muted h6">{item.brand}</p> */}
              <h3>{item.title}</h3>
              <h3>{item.price}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
            <div className="col-3">
              <div className="input-group">
                <button className="btn btn-primary px-3 py-2" onClick={e => addItemToCart(item)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button>
                <input type="text" className="form-control" value={item.quantity} />
                <button className="btn btn-primary px-3 py-2" onClick={e => removeItemFromCart(item)}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
              </div>
              <h2 className="my-2"> ₹ {item.price}</h2>
            </div>
          </div>
        ));
        
      };
    
  return (
    <div>
        <div className="container my-3">
            <div className="card vh-80 shadow">
             <div className="row g-0">
                <div className="col-md-9">
                    <h2 className="my-3 mx-3">Shopping Cart</h2>
                    <hr />
                    {displayCartItems()}
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <div className="card vh-50">
                            <div className="card-body">
                                <h3>Order Summary</h3>
                                <hr />
                                <p>Total:{getCartTotal()}</p>
                                <p>Items:{getCartItemsCount()}</p>
                                <button className='btn btn-danger' onClick={() => clearCart()}>Clear Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

             </div>
            </div>
        </div>
    </div>
  )
}

export default Cart