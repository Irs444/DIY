import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const Login = () => {

  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values));
      console.log(values);

      // send request to backend/REST API
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      console.log(res.statusText);

      if (res.status === 200) {
        enqueueSnackbar('Loggedin Successfully', { variant: 'success' });
        navigate('/');

        const data = await res.json();
        console.log(data);
        //to uave user data  in session ,inbuilt api- sessionstorage
        sessionStorage.setItem('user', JSON.stringify(data));

      } else if (response.status === 401) {
        enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }


    },
    validationSchema: LoginSchema
  });

  return (
    <div>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      {/* <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      /> */}
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Login in to your account
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST" onSubmit={loginForm.handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              name="email"
              type="email"
              autoComplete="email"
              required=""
              className=" outline outline-offset-2 outline-blue-400 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <span className='text-danger'>{loginForm.errors.email}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <Link
                href="#"
                to={"/user/signup"}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              name="password"
              type="password"
              autoComplete="current-password"
              required=""
              className=" outline outline-offset-2 outline-blue-400 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
             <span className='text-danger'>{loginForm.errors.password}</span>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
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

export default Login