import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";


const ResetPassword = () => {

    const [passVisible, setPassVisible] = useState(false);
  
    const [email, setEmail] = useState("");
  
    const [otp, setOTP] = useState("");
    const [showReset, setShowReset] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();

    const generateOTP = () => {
        let tempOtp = Math.floor(1000 + Math.random() * 9000);
        // let tempOtp = parseInt(Math.random().toFixed(4).substr(`-${4}`));
        setOTP(tempOtp);
        return tempOtp;
      };
    
      const passwordForm = {
        otp: "",
        password: "",
        confirm: "",
      };
    
      const sendOTP = () => {
        const tempOtp = generateOTP();
        fetch("http://localhost:5000/util/sendmail", {
          method: "POST",
          body: JSON.stringify({
            to: email,
            subject: "Password Reset",
            // text: "This is your OTP for password reset " + generateOTP(),
            text: "This is your OTP for password reset " + tempOtp,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res.status);
          console.log(otp);
          if (res.status === 200) {
           enqueueSnackbar("OTP sebd successfully", {variant:'success'})
          }
          return res.json();
        });
      };
    
      const verifyUser = () => {
        fetch("http://localhost:5000/user/getbyemail/" + email)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (!data) {
              console.log("not found!!");
            enqueueSnackbar("email not rregistered", {variant:"error"})
            } else {
              setCurrentUser(data);
              setShowReset(true);
              sendOTP();
              // console.log(generateOTP());
            }
          });
      };
    
      // const verifyOTP = (formdata) => {
      const verifyOTP = (formdata) => {
        if (otp.toString() === formdata.otp.toString()) {
       
          console.log("otp matched");
          resetPassword(formdata);
        } else {
          console.log("otp not matched");
         enqueueSnackbar("enter correct OTP", {variant:"error"})
        }
      };
    
    
      const resetPassword = ({ password }) => {
        fetch("http://localhost:5000/user/update/" + currentUser._id, {
          method: "PUT",
          body: JSON.stringify({ password: password }),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => {
            console.log("reset");
            if (res.status === 200)
             enqueueSnackbar("password reset successfully", {variant:"success"})
              .then(() => {
                navigate("/user/Login");
              });
            return res.json();
          })
          .then((data) => {
            console.log(data);
          });
      };
      const validationSchema = Yup.object().shape({
        password: Yup.string()
         .required("Password is Required"),
        confirm: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Password Confirmation is Required"),
      });
    

      const showResetForm = () => {
        if(showReset){
            return (
                <Formik 
                initialvalues={passwordForm}
                onSubmit={verifyOTP}
                validationSchema={validationSchema}
                 >

                    {({ values, handleChange, handleSubmit, errors }) => (
                          <form action="" className='my-4' onSubmit={handleSubmit}>
                          <div className="mb-2">
                              <input type="text" className='form-control' placeholder='Enter OTP'
                               id="otp"
                               value={values.otp}
                               onChange={handleChange}
                                />
                          </div>
                          <div className="mb-2">
                              <input type="password" className='form-control' placeholder='New Passwrd'
                               id="password"
                               value={values.password}
                               onChange={handleChange}
                                />
                          </div>
                          <div className="mb-2">
                              <input type="password" className='form-control' placeholder='Confirm Password' 
                               id="confirm"
                               value={values.confirm}
                               onChange={handleChange}
                               />
                          </div>
                          <div className="text-center">
                              <button type='submit' className='btn btn-primary form-control'>Submit</button>
                          </div>
                      </form>
                    )}
               
            </Formik>
            )
        }
      }

  return (
    <div>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8 ">
                    <h2 className='text-center fs-1 my-3' style={{fontFamily:"initial"}}>Reset Password</h2>
                    <form action="">
                        <div className="mb-2">
                            <input type="text" className='form-control' placeholder='Enter Your Email'
                             id="email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                              />
                        </div>
                        <div className="text-center">
                            <button type='submit' onClick={verifyUser} className='btn btn-primary form-control'>Send OTP</button>
                        </div>
                    </form>

                 {
                    showResetForm()
                 }

                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword