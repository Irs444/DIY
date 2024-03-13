import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import "./Signup.css";


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {

    const navigate = useNavigate();

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            cPassword: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
            // setSubmitting(true);
            console.log(values);

            const res = await fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            // console.log(response.statusText);

            if (res.status === 200) {

                enqueueSnackbar("User Added Successfully", { variant: 'success' });
                navigate('/user/login');
                
            } else if (res.status === 401) {
                enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
            
            } else {
                enqueueSnackbar("User Not Added", { variant: 'error' });
            }

        },
        validationSchema: SignupSchema
    });

    return (
        <div  >
            
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                   
                    <h2 style={{ fontFamily: "initial" }} className="   mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" action="#" method="POST" onSubmit={signupForm.handleSubmit}>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="name"
                                className="block text-sm font-bold leading-6 text-gray-900 "
                            >
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    value={signupForm.values.name}
                                    onChange={signupForm.handleChange}
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required=""
                                    className=" outline  outline-1   block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                { signupForm.touched.name && 
                                <span className="text-danger">{signupForm.errors.name}</span>
                            }
                            </div>
                        </div>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="email"
                                className="block text-sm font-bold leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    value={signupForm.values.email}
                                    onChange={signupForm.handleChange}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                { signupForm.touched.email &&
                                 <span className="text-danger">{signupForm.errors.email}</span>
                                }
                            </div>
                        </div>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="password"
                                className="block text-sm font-bold leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    value={signupForm.values.password}
                                    onChange={signupForm.handleChange}
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                { signupForm.touched.password &&
                                 <span className="text-danger">{signupForm.errors.password}</span>
                                }
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="cPassword"
                                    className="block text-sm font-bold leading-6 text-gray-900"
                                >
                                    Repeat Password
                                </label>
                                <div className="text-sm">
                                    {/* <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a> */}
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="cPassword"
                                    value={signupForm.values.cPassword}
                                    onChange={signupForm.handleChange}
                                    name="cPassword"
                                    type="cPassword"
                                    autoComplete="cPassword"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                { signupForm.touched.cPassword &&
                                 <span className="text-danger">{signupForm.errors.cPassword}</span>
                                }
                            </div>
                        </div>
                        <div>
                            <button style={{ fontFamily: "initial" }}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    {/* <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a
          href="#"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </p> */}
                </div>
            </div>
          
        </div>
    )
}

export default Signup