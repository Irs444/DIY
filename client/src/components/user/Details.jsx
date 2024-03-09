import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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

        {
          productList !== null ? (
            <div className="card my-4 shadow">
              <div className="row my-5">
                <div className="col-md-6">
                  <img src={"http://localhost:5000/" + productList.image} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h1 className='fw-bold py-2'>{productList.title}</h1>
                  <h1 className='fw-bold py-2'><i className="bi bi-currency-rupee fw-bold "></i>{productList.price}</h1>
                  <p className='py-3'>{productList.description}</p>
                  <button className="btn btn-outline-danger "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
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