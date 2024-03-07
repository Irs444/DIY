import React, { useEffect, useState } from 'react'

const Product = () => {

    const [productList, setProductList] = useState([]);

    const fetchProductList = async () => {
        const res = await fetch("http://localhost:5000/product/getall");
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setProductList(data);
    }
    useEffect(() => {
        fetchProductList();
    }, [])

    return (
        <div className='bg-slate-400'>
            <div className="container ">
                <div className=''>
                    <label for="hs-trailing-button-add-on-with-icon-and-button" className="sr-only">Label</label>
                    <div className="relative flex rounded-lg shadow-sm ">
                        <input type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" className=" mt-2 py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"/>
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <svg className="flex-shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                            <button  type="button" className="  mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent  text-blue fw-bold  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Search</button>
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
                                            <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                                            <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>Buy Now</button>
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