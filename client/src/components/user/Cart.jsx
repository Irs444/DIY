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
        
        <h3>Your Cart is Currently Empty!</h3>
        <p className="text-muted">Before proceed to checkout you must add some products to your shopping cart. <br />You will fill a lot of interesting products on our "Product" page.</p>
        <Link className="btn rounded-pill my-3" style={{ backgroundColor: "#4BCCF2", color: "#fff" }} to={"/user/product"}>Return To Shop</Link>
      </div>
    );
    return cartItems.map((item) => (
      <div key={item._id} className="row mb-3">
        <div className="col-2">

          <div
            className="cart-item-placeholder p-3"
            style={{
              // backgroundImage:`url('${'http://localhost:5000'}/${item.image}')`, 
            }} >

            <img src={"http://localhost:5000/" + item.image} alt="" /></div>
        </div>

        <div className="col-7 py-3">
          {/* <p className="text-muted h6">{item.brand}</p> */}
          <h3 className=''><span className='fw-bold me-2' style={{ color: "teal", fontFamily: 'initial' }}>Title:</span> {item.title}</h3>
          <h3 className=''> <span className='fw-bold me-2' style={{ color: "teal", fontFamily: 'initial' }}>Price:</span> {item.price}</h3>
          <p className=""><span className='fw-bold me-2' style={{ color: "teal", fontFamily: 'initial' }}>Description:</span> {item.description}</p>
        </div>
        <div className="col-3 py-3">
          <div className="input-group">
            <button className="btn btn-primary px-3 py-2" onClick={e => addItemToCart(item)}> <i className="bi bi-plus"></i> </button>
            <input type="text" className="form-control text-center" value={item.quantity} />
            <button className="btn btn-primary px-3 py-2" onClick={e => removeItemFromCart(item)}><i className="bi bi-dash"></i></button>
          </div>
          <h2 className="my-2 text-center"> ₹ {item.price}</h2>
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
              <h2 className="my-3 mx-3 fw-bold fs-3 text-center" style={{ color: "teal", fontFamily: 'initial' }}>Shopping Cart</h2>
              <hr className='my-3' />
              {displayCartItems()}
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <div className="card vh-50">
                  <div className="card-body">
                    <h3 style={{ color: "teal", fontFamily: 'initial' }}>Order Summary</h3>
                    <hr />
                    <p ><span style={{ color: "teal", fontFamily: 'initial', marginInline: "5px" }} >Total:</span>{getCartTotal()}</p>
                    <p><span style={{ color: "teal", fontFamily: 'initial', marginInline: "5px" }}>Items:</span>{getCartItemsCount()}</p>
                    <button className='btn btn-outline-danger my-2' onClick={() => clearCart()}><i className="bi bi-archive px-1"></i>Clear Cart</button>
                    <Link to="/checkout" className="btn btn-outline-warning ms-2 "><i className="bi bi-bag px-1" ></i>Buy Now</Link>
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