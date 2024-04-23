import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ManageProduct = () => {

  const [productList, setProductList] = useState([]);

  const fetchProductList = async() => {
    const res = await fetch("http://localhost:5000/product/getall");
    console.log(res.status);
     const data = await res.json();
     console.log(data);
     setProductList(data); 
  }

  useEffect(() => {
  fetchProductList();
  },[])

  const deletepodcast = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5000/product/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar('Podcast Deleted Successfully', { variant: 'success' });
      fetchProductList();
    
    }

  }

  const displayPodcastData = () => {
   
    return  <table className='table shadow  rounded '>
      <thead>
        <tr style={{ fontFamily: "initial" }}>
          <th >Image</th>
          <th >Video</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
            productList.map( ( pod ) => {
              return <tr style={{ fontFamily: "initial" }}>
                <td><img src={"http://localhost:5000/" + pod.image} alt="" style={{height:40}} /></td>
                <td><video controls  src={"http://localhost:5000/" + pod.video} alt="" style={{height:40}} /></td>
                <td>{pod.title}</td>
                <td>{pod.category}</td>
                <td>{pod.description}</td>
                <td>{pod.price}</td>
              
                <td>
                  <Link style={{ fontFamily: "initial" }} to={`/admin/update/${pod._id}`} className='btn btn-primary'>Edit</Link>
                </td>
                <td>
                  <button style={{ fontFamily: "initial" }} className='btn btn-danger' onClick={ e => deletepodcast(pod._id) } >Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    }

  return (
    <div>
          <div className='container'>
        <h1 className='text-center fw-bold text-danger my-4 fs-2' style={{ fontFamily: "initial" }}>Manage Product</h1>
        {displayPodcastData()}
      </div>
    </div>
  )
}

export default ManageProduct