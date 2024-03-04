import React from "react";
import "./Home.css";

const Home = () => {
    return(
        <div>
            <div className="container-fluid home">
                <div className="row">
                    <div className="col-12 ">
                        <h1 className="text-center fw-bold header mt-16 text-6xl">Stay Home and Make Something</h1>
                        <p className="desc my-3">A DIY website builder is a platform that lets you create a website without any special skills. Yes, neither tech nor design skills are necessary.</p>
                    </div>
                </div>
            </div>
            <section>
                <div className="container-fluid mt-4">
                  <div className="row g-3">
                    <div className="col-md-2 ">
                        <div className="card image  ">
                           
                            <img src="https://m.media-amazon.com/images/I/71tq7mpSAAL.jpg" alt="" className="img-fluid "  />
                           
                            <h6 className="text-center py-2 fw-bold ">Showpiece for Office</h6>
                           
                        </div>
                    </div>
                    <div className="col-md-2">
                         <div className=" card image ">
                            <img src="https://m.media-amazon.com/images/I/81KykdMOfvL._AC_UF894,1000_QL80_.jpg" alt="" className="img-fluid  "   />
                            
                            <h6 className="text-center py-2 fw-bold">Antique Showpiece</h6>
                            
                        </div></div>
                    <div className="col-md-2"> 
                    <div className="card image ">
                            <img src="https://nestasia.in/cdn/shop/products/SBP1821.jpg?v=1647000200" alt="" className="img-fluid   " />
                            <h6 className="text-center py-2 fw-bold">Showpiece for Office</h6>
                        </div></div>
                    <div className="col-md-2">
                         <div className="card image ">
                            <img src="https://www.jiomart.com/images/product/original/rv56sdnozq/pair-of-duck-showpiece-for-home-decor-product-images-orv56sdnozq-p591563990-0-202205241630.jpg?im=Resize=(420,420)" alt="" className="img-fluid  " />
                            <h6 className="text-center py-2 fw-bold">Showpiece for Office</h6>
                        </div></div>
                    <div className="col-md-2">
                         <div className="card image ">
                            <img src="https://m.media-amazon.com/images/I/71HnANqCVfL.jpg" alt="" className="img-fluid  " />
                            <h6 className="text-center py-2 fw-bold">Showpiece for Office</h6>
                        </div></div>
                    <div className="col-md-2">
                         <div className="card image ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0so6hAr8BI3Z9FUieRhDOuGpgchASLqSOKKVbOwx7w&s" alt="" className="img-fluid  " />
                            <h6 className="text-center py-2 fw-bold">Showpiece for Office</h6>
                        </div></div>
                  </div>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    )
}

export default Home;