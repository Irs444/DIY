import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Details = () => {

  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    const res = await fetch("http://localhost:5000/product/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    setProductList(data);
    console.log(data);
  }

  useEffect(() => {
    getProductData();
  }, [])

  return (
    <div className=''>
      <div className="container">
      <Link to={"/user/product"} className='btn btn-outline-warning rounded-pill px-3 my-4'><i className=" px-2 bi bi-arrow-left-circle"></i>Products</Link>

        {
          productList !== null ? (
            <div className="card my-4 shadow">
              <div className="row my-5">
                <div className="col-md-4">
                  <img src={"http://localhost:5000/" + productList.image} alt="" className="img-fluid ms-3" style={{height:"200px"}} />
                </div>
                <div className="col-md-6">
                  <h1 className='fw-bold py-2' style={{color:"teal", fontFamily:"initial"}}>Title: {productList.title}</h1>
                  <h1 className='fw-bold ' style={{color:"teal", fontFamily:"initial"}}>Price: <i className="bi bi-currency-rupee fw-bold "></i>{productList.price}</h1>
                  <p className='py-3' style={{color:"teal", fontFamily:"initial"}}>Description: {productList.description}</p>
                  {/* <button className="btn btn-outline-danger "><i className="bi bi-cart px-1 "></i>Add to Cart</button> */}
                  <button className="btn btn-outline-warning ms-2 "><i className="bi bi-bag px-1"></i>Buy Now</button>
                </div>
              </div>
            </div>
          ) : (
            <div>
            <h1>NO PRODUCT FOUND</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Details