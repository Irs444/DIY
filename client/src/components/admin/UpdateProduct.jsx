import { Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

    const { id } = useParams();
    const [updateProduct, setUpdateProduct] = useState(null);
    const [selImage, setselImage] = useState('');
    const navigate = useNavigate();

    const fetchProductData = async () => {
        const res = await fetch("http://localhost:5000/product/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);

        setUpdateProduct(data);
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    const submitForm = async (values) => {
        console.log(values);
        values.image = selImage.name;
        const res = await fetch('http://localhost:5000/product/update/' + id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar('User Updated Successfully', { variant: 'success' });
            navigate('/admin/manageproduct');
        }
    };

    const uploadeImage = async (e) => {
        const file = e.target.files[0];
        setselImage(file);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
                toast.success('File Uploaded!!');
            }
        });


    }

    return (
        <div>
            <main className="w-full max-w-md mx-auto p-6 ">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7 shadow-lg">
                        <div className="text-center ">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                Update Product
                            </h1>
                        
                        </div>
                        <div className="mt-5">
                       

                            {
                                updateProduct !== null ? (<Formik initialValues={updateProduct} onSubmit={submitForm}>
                                    {(AddProduct) => {
                                        return      <form onSubmit={AddProduct.handleSubmit}> 
                                          <div className="grid gap-y-4">
                                            {/* Form Group */}
                                            <div>
                                                <label
                                                    htmlFor="title"
                                                    className=" fw-bold block text-sm mb-2 dark:text-white"
                                                >
                                                    Title
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        value={AddProduct.values.title}
                                                        onChange={AddProduct.handleChange}
                                                        name="title"
                                                        className=" outline outline-1 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                        required=""
                                                        // aria-describedby="email-error"
                                                    />
                                                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                        <svg
                                                            className="size-5 text-red-500"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                {/* <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                                    Please include a valid email address so we can get back to you
                                                </p> */}
                                            </div>
                                            {/* End Form Group */}
                                            {/* Form Group */}
                                            <div>
                                                <label
                                                    htmlFor="password"
                                                    className=" fw-bold block text-sm mb-2 dark:text-white"
                                                >
                                                    Description
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="description"
                                                        value={AddProduct.values.description}
                                                        onChange={AddProduct.handleChange}
                                                        name="description"
                                                        className=" outline outline-1 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                        required=""
                                                        aria-describedby="password-error"
                                                    />
                                                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                        <svg
                                                            className="size-5 text-red-500"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p
                                                    className="hidden text-xs text-red-600 mt-2"
                                                    id="password-error"
                                                >
                                                    8+ characters required
                                                </p>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="password"
                                                    className=" fw-bold block text-sm mb-2 dark:text-white"
                                                >
                                                    Category
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="category"
                                                        value={AddProduct.values.category}
                                                        onChange={AddProduct.handleChange}
                                                        name="category"
                                                        className=" outline outline-1 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                        required=""
                                                        aria-describedby="password-error"
                                                    />
                                                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                        <svg
                                                            className="size-5 text-red-500"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p
                                                    className="hidden text-xs text-red-600 mt-2"
                                                    id="password-error"
                                                >
                                                    8+ characters required
                                                </p>
                                            </div>
                                            {/* End Form Group */}
                                            {/* Form Group */}
                                            <div>
                                                <label
                                                    htmlFor="confirm-password"
                                                    className=" fw-bold block text-sm mb-2 dark:text-white"
                                                >
                                                    Price
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="price"
                                                        value={AddProduct.values.price}
                                                        onChange={AddProduct.handleChange}
                                                        name="price"
                                                        className=" outline outline-1 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                        required=""
                                                        aria-describedby="confirm-password-error"
                                                    />

                                                    {/* <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg
                    className="size-5 text-red-500"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div> */}
                                                </div>
                                                <label className="block">
                                                    <label htmlFor='uploade-image' className="sr-only ">Choose profile photo</label>
                                                    <input onChange={uploadeImage} type="file" id='update-image' className=" mt-3 block w-full text-sm text-gray-500 
                                       file:me-4 file:py-2 file:px-4
                                       file:rounded-lg file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-blue-600 file:text-white
                                       hover:file:bg-blue-700
                                       file:disabled:opacity-50 file:disabled:pointer-events-none
                                       dark:file:bg-blue-500
                                       dark:hover:file:bg-blue-400
                                       "/>
                                                </label>
                                                <p
                                                    className="hidden text-xs text-red-600 mt-2"
                                                    id="confirm-password-error"
                                                >
                                                    Password does not match the password
                                                </p>
                                            </div>
                                            {/* End Form Group */}
                                            {/* Checkbox */}
                                            {/* <div className="flex items-center">
              <div className="flex">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
              </div>
              <div className="ms-3">
                <label
                  htmlFor="remember-me"
                  className="text-sm dark:text-white"
                >
                  I accept the{" "}
                  <a
                    className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div> */}
                                            {/* End Checkbox */}
                                            <button
                                                type="submit"
                                                className="w-full py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                            >
                                                Update Product
                                            </button>
                                        </div>
                                    </form>

                                    }}
                                 

                                </Formik>) : (<h1>Loading...</h1>)
         }




                            {/* End Form */}
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default UpdateProduct