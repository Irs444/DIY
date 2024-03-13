import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useProductContext from '../../context/ProductContext';

const Product = () => {

    const [productList, setProductList] = useState([]);
    const [masterList, setMasterList] = useState([]);
    const { addItemToCart, isInCart } = useProductContext();

    const fetchProductList = async () => {
        const res = await fetch("http://localhost:5000/product/getall");
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setProductList(data);
        setMasterList(data);
    }
    useEffect(() => {
        fetchProductList();
    }, [])

    const applySearch = (e) => {
        const inputText = e.target.value;
    
        setProductList(masterList.filter((equipment) => {
          return equipment.title.toLowerCase().includes(inputText.toLowerCase());
        }));
      }
    

    return (
        <div className=''>
            <div className="container">
                <div className=''>
                    <label for="hs-trailing-button-add-on-with-icon-and-button" className="sr-only">Label</label>
                    <div className="relative flex rounded-lg shadow-sm">
                        <input onChange={applySearch}  type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" style={{paddingInline:"4rem"}} className=" mt-2 py-3   ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <svg className="flex-shrink-0 size-6  text-gray-400" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                          
                    </div>
                </div>
                <div className="row">
                    {
                        productList.map((pro) => {
                            return (
                                <div className="col-md-3  g-3  ">
                                    <div className="card shadow-sm my-3">
                                        <img className='card-img-top img-fluid ' src={"http://localhost:5000/" + pro.image} alt="" style={{ height: 200 }} />
                                       
                                        <div className="card-body fw-bold d-flex justify-content-between ">
                                            <h1 className='py-1'>{pro.title}</h1>
                                            <h1><i className="bi bi-currency-rupee fw-bold "></i>{pro.price}</h1>
                                            

                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <button disabled={isInCart(pro)} onClick={e => addItemToCart(pro)}  className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>{isInCart(pro) ? 'Already Added' : 'Add to Cart'}</button>
                                            <Link to={"/user/details/" + pro._id} className="btn btn-outline-danger">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                    {/* <div className="col-md-3  g-3 ">
                        <div className="card shadow-sm">
                            <img className='card-img-top' src="https://www.sketchappsources.com/resources/source-image/bootstrap-ecommerce-uikit.png" alt="" />
                            <div className="card-body">
                                <h1>Title</h1>
                                <h4><i className="bi bi-currency-dollar"></i>200</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-3  g-3 ">
                        <div className="card shadow border-0">
                            <img src="https://www.sketchappsources.com/resources/source-image/bootstrap-ecommerce-uikit.png" alt="" />
                            <div className="card-body">
                                <h1>Title</h1>
                                <h4><i className="bi bi-currency-dollar"></i>200</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-3  g-3 ">
                        <div className="card shadow border-0">
                            <img src="https://www.sketchappsources.com/resources/source-image/bootstrap-ecommerce-uikit.png" alt="" />
                            <div className="card-body">
                                <h1>Title</h1>
                                <h4><i className="bi bi-currency-dollar"></i>200</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-3  g-3 ">
                        <div className="card shadow border-0">
                            <img src="https://www.sketchappsources.com/resources/source-image/bootstrap-ecommerce-uikit.png" alt="" />
                            <div className="card-body">
                                <h1>Title</h1>
                                <h4><i className="bi bi-currency-dollar"></i>200</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-3  g-3 ">
                        <div className="card shadow border-0">
                            <img src="https://www.sketchappsources.com/resources/source-image/bootstrap-ecommerce-uikit.png" alt="" />
                            <div className="card-body">
                                <h1>Title</h1>
                                <h4><i className="bi bi-currency-dollar"></i>200</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-3  g-3 ">
                        <div className="card shadow border-0">
                            <img src="https://www.sketchappsources.com/resources/source-image/bootstrap-ecommerce-uikit.png" alt="" />
                            <div className="card-body">
                                <h1>Title</h1>
                                <h4><i className="bi bi-currency-dollar"></i>200</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-3  g-3 ">
                        <div className="card shadow border-0">
                            <img src="https://www.sketchappsources.com/resources/source-image/bootstrap-ecommerce-uikit.png" alt="" />
                            <div className="card-body">
                                <h1>Title</h1>
                                <h4><i className="bi bi-currency-dollar"></i>200</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                                <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Product