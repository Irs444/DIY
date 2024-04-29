import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'


const ManageUser = () => {

  const [userList, setUserList] = useState([]);

  const fetchUserList = async() => {
    const res = await fetch("http://localhost:5000/user/getall");
    console.log(res.status);
     const data = await res.json();
     console.log(data);
     setUserList(data); 
  }

  useEffect(() => {
  fetchUserList();
  },[])

  const deleteUser = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar('Podcast Deleted Successfully', { variant: 'success' });
      fetchUserList();
    
    }

  }

  const displayUserData = () => {
   
    return  <table className='table shadow  rounded '>
      <thead>
        <tr style={{ fontFamily: "initial" }}>
          {/* <th>Image</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Created At</th>
          
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
            userList.map( ( pod ) => {
              return <tr style={{ fontFamily: "initial" }} >
                {/* <td><img src={"http://localhost:5000/" + pod.image} alt="" style={{height:40}} /></td> */}
                <td>{pod.name}</td>
                <td>{pod.email}</td>
                <td>{pod.password}</td>
                <td>{pod.createdAt}</td>
              
                <td>
                  {/* <Link to={`/admin/update/${pod._id}`} className='btn btn-primary'>Edit</Link> */}
                </td>
                <td>
                  <button className='btn btn-danger' onClick={ e => deleteUser(pod._id) } >Delete</button>
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
        <h1 className='text-center fw-bold text-danger my-4 fs-2' style={{ fontFamily: "initial" }}>Manage User</h1>
        {displayUserData()}
      </div>
    </div>
  )
}

export default ManageUser