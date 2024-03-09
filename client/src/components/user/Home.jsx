import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import "./Home.css";
import * as Yup from 'yup';

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

const Home = () => {

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
                
            } else if (response.status === 401) {
                enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
            
            } else {
                enqueueSnackbar("User Not Added", { variant: 'error' });
            }

        },
        validationSchema: SignupSchema
    });


    return (
        <div className="">

            <section className="mb-5">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="slide1"><div className="kit">Kit Section</div></SwiperSlide>
        <SwiperSlide className="slide2"><div className="kit1">Valentine Section</div></SwiperSlide>
        <SwiperSlide className="slide3"></SwiperSlide>
       
      </Swiper>

            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top " style={{height:200}} src="https://ohjuliaann.com/wp-content/uploads/2018/11/Christmas-DIY-Easy-holiday-craft-tutorial-Mason-jar-shatterproof-ornament-winter-scenes-with-vintage-retro-Christmas-miniatures-Full-DIY-on-ohjuliaann.com-1.jpg" alt="" />
                              <div className="card-body">
                                <div className="text-center fw-bold fs-3 py-3">
                                    <h1>Showpiece Items</h1>
                                </div>
                                <div className="text-center">
                                    <Link to={"/user/productbycategory/Showpiece"} className="btn btn-danger px-5">View</Link>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top " style={{height:200}} src="http://youmeandtrends.com/wp-content/uploads/2015/11/wedding-stage-decoration-with-flowers.jpg" alt="" />
                              <div className="card-body">
                                <div className="text-center fw-bold fs-3 py-3">
                                    <h1>Decoration</h1>
                                </div>
                                <div className="text-center">
                                    <Link to={"/user/getdecoration/decoration"} className="btn btn-danger px-5">View</Link>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top " src="https://tse3.mm.bing.net/th?id=OIP.gvLmct_c5xqSgTlwbamgbwAAAA&pid=Api&P=0&h=180" alt="" style={{height:200}} />
                              <div className="card-body">
                                <div className="text-center fw-bold fs-3 py-3">
                                    <h1>Gift Hamper</h1>
                                </div>
                                <div className="text-center">
                                    <Link to={"/user/getgift/gift"} className="btn btn-danger px-5">View</Link>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top " src="https://tse1.explicit.bing.net/th?id=OIP.4EFXPEWvJO1Rct11ktzkWwAAAA&pid=Api&P=0&h=180" alt="" style={{height: 200}} />
                              <div className="card-body">
                                <div className="text-center fw-bold fs-3 py-3">
                                    <h1>Interior Designing</h1>
                                </div>
                                <div className="text-center">
                                    <Link to={"/user/getinterior/interior"}  className="btn btn-danger px-5">View</Link>
                                </div>
                              </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        
        <section>
        
  {/* FAQ */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
        Frequently Asked Questions
      </h2>
    </div>
    {/* End Title */}
    <div className="max-w-5xl mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Can I cancel at anytime?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Yes, you can cancel anytime no questions are asked while you cancel
            but we would highly appreciate if you will give us some feedback.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            My team has credits. How do we use them?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Once your team signs up for a subscription plan. This is where we
            sit down, grab a cup of coffee and dial in the details.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            How does Preline's pricing work?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Our subscriptions are tiered. Understanding the task at hand and
            ironing out the wrinkles is key.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            How secure is Preline?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Protecting the data you trust to Preline is our first priority. This
            part is really crucial in keeping the project in line to completion.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Do you offer discounts?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            We've built in discounts at each tier for teams. The time has come
            to bring those ideas and plans to life.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            What is your refund policy?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            We offer refunds. We aim high at being focused on building
            relationships with our clients and community.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End FAQ */}


        </section>
        
        <section>
        <>
  {/* Hero */}
  <div className="relative overflow-hidden">
    <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
      <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
        {/* Title */}
        <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
          Solving problems for every{" "}
          <span className="text-blue-600 dark:text-blue-500">team</span>
        </h1>
        <p className="mt-3 text-base text-gray-500">
          Built on standard web technology, teams use Preline to build beautiful
          cross-platform hybrid apps in a fraction of the time.
        </p>
        {/* End Title */}
        <div className="mt-8 grid">
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <svg
              className="w-4 h-auto"
              width={46}
              height={47}
              viewBox="0 0 46 47"
              fill="none"
            >
              <path
                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                fill="#4285F4"
              />
              <path
                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                fill="#34A853"
              />
              <path
                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                fill="#FBBC05"
              />
              <path
                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                fill="#EB4335"
              />
            </svg>
            Sign up with Google
          </button>
        </div>
        <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
          Or
        </div>
        {/* Form */}

        <form onSubmit={signupForm.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-name-2"
              className="block text-sm font-medium dark:text-white"
            >
              <span className="sr-only">Full name</span>
            </label>
            <input
              type="text"
              id="name"
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
              className=" outline  outline-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Full name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-email-2"
              className="block text-sm font-medium dark:text-white"
            >
              <span className="sr-only">Email address</span>
            </label>
            <input
              type="email"
              id="email"
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
              className=" outline  outline-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-password-1"
              className="block text-sm font-medium dark:text-white"
            >
              <span className="sr-only">Password</span>
            </label>
            <input
              type="password"
              id="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
              className=" outline  outline-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-password-2"
              className="block text-sm font-medium dark:text-white"
            >
              <span className="sr-only">Repeat Password</span>
            </label>
            <input
              type="password"
              id="cPassword"
              onChange={signupForm.handleChange}
              value={signupForm.values.cPassword}
              className=" outline  outline-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Repeat Password"
            />
          </div>
          <div className="grid">
            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Sign up
            </button>
          </div>
        </form>
        {/* End Form */}
      </div>
    </div>
    <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('../interior.svg')] bg-no-repeat bg-center bg-containe" />
    {/* End Col */}
  </div>
  {/* End Hero */}
</>

        </section>
      <section>
      <footer className="bg-gray-900 w-full">
  <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div className="col-span-full lg:col-span-1">
        <a
          className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
          aria-label="Brand"
        >
        DIY
        </a>
      </div>
      {/* End Col */}
      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Product</h4>
        <div className="mt-3 grid space-y-3">
          <p>
            <a
              className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Pricing
            </a>
          </p>
          <p>
            <a
              className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Changelog
            </a>
          </p>
          <p>
            <a
              className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Docs
            </a>
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Company</h4>
        <div className="mt-3 grid space-y-3">
          <p>
            <a
              className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              About us
            </a>
          </p>
          <p>
            <a
              className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Blog
            </a>
          </p>
          <p>
            <a
              className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Careers
            </a>{" "}
            <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
              We're hiring
            </span>
          </p>
          <p>
            <a
              className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Customers
            </a>
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="col-span-2">
        <h4 className="font-semibold text-gray-100">Stay up to date</h4>
        <form>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-gray-800">
            <div className="w-full">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter your email"
              />
            </div>
            <a
              className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Subscribe
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            New UI kits or big discounts. Never spam.
          </p>
        </form>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">
          © 2022 Preline. All rights reserved.
        </p>
      </div>
      {/* End Col */}
      {/* Social Brands */}
      <div>
        <a
          className="size-10 mx-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </a>
        <a
          className="size-10 mx-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
        </a>
        <a
          className="size-10 mx-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
        <a
          className="size-10 mx-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a
          className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
          </svg>
        </a>
      </div>
      {/* End Social Brands */}
    </div>
  </div>
</footer>

      </section>
        </div>
    )
}

export default Home;