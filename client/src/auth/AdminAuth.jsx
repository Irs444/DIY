import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

const LoginAuth = ({children}) => {

    const navigate = useNavigate();
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('admin')));

    if(currentUser===null){
        return children;
    }else{
        enqueueSnackbar("User Added Successfully", { variant: 'danger' });
        navigate('/user/home');
    }
}

export default LoginAuth;