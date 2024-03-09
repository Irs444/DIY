import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const GiftHamper = () => {
  const { category } = useParams();
  const [categoryList, setCategoryList] = useState([]);

  const fetchcategoryData = async () => {
    const res = await fetch("http://localhost:5000/product/getbycategory/gift");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    if (category) {
        setCategoryList(data.filter((cate) => cate.category === category));
    } else {
        setCategoryList(data);
    }
};

useEffect(() => {
  fetchcategoryData();
}, [])

const displayCategoryData = () => {
  if (categoryList.length === 0) {
      return <h1>NO CATEGORY FOUND</h1>;
  } else {
      return categoryList.map((cat) => {
          return <div className="col-md-3 g-3">
              <div className="card shadow-lg my-3 h-100 ">
                  <img src={"http://localhost:5000/" + cat.image} alt="" className="card-img-top img-fluid" style={{ height: 200 }} />
                  <div className="card-body fw-bold ">
                      <h1 className="py-1">{cat.title}</h1>
                      <h1><i className="bi bi-currency-rupee fw-bold "></i>{cat.price}</h1>
                  </div>

                  <div className="card-footer d-flex justify-content-between">
                      <button className="btn btn-outline-primary "><i className="bi bi-cart px-1 "></i>Add to Cart</button>
                      <button className="btn btn-outline-danger"><i className="bi bi-bag px-1"></i>View Details</button>
                  </div>
              </div>

          </div>


      })
  }
};
  return (
    <div>
       <header className='ls-head '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text-center fw-bold fs-1 text-primary'>Gift Hamper</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className='container mb-5 vh-100'>
                <div className="row">
                    {displayCategoryData()}
                </div>

            </div>
    </div>
  )
}

export default GiftHamper