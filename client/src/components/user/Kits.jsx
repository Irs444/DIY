import React, { useEffect, useState } from 'react'

const Kits = () => {

    const [videoList, setVideoList] = useState([]);
    const [masterList, setMasterList] = useState([]);
    const[count, setCount] = useState(0);
    

    const fetchVideoList = async () => {
        const res = await fetch("http://localhost:5000/product/getall");
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setVideoList(data);
        setMasterList(data);

    }
    useEffect(() => {
        fetchVideoList();
    }, [])

    const applySearch = (e) => {
        const inputText = e.target.value;

        setVideoList(masterList.filter((equipment) => {
            return equipment.title.toLowerCase().includes(inputText.toLowerCase());
       }));
     }

       const likes = () => {
        setCount(count+1);
        
       }

       const dislikes = () => {
        setCount(count-1);
       }

       // share video
       const shareVideo = (vid) => {
        if (navigator.share) {
          navigator.share({
            title: vid.title,
            text: vid.description,
            url: "http://localhost:5000/" + vid.video,
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
        } else {
          // fallback for browsers that do not support navigator.share
          alert("Your browser does not support the Web Share API");
        }
      }

    return (
        <div>
            <div className="container">
                <label for="hs-trailing-button-add-on-with-icon-and-button" className="sr-only">Label</label>
                <div className="relative flex rounded-lg shadow-sm my-2">
                    <input onChange={applySearch} type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" style={{ paddingInline: "4rem" }} className=" mt-2 py-3   ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <svg className="flex-shrink-0 size-6  text-gray-400" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>

                </div>
                <div className="row  my-4 g-3">
                    <h1 className=" fw-bold fs-1 text-center" style={{ color: "teal", fontFamily: "initial" }}>Kits</h1>
                    {
                        videoList.map((vid) => {
                            return (<div className="col-md-4 text-center">

                                <div className="card ">
                                    <video  controls className='card-img-top img-fluid ' src={"http://localhost:5000/" + vid.video} alt="" style={{ height: 200 }} />
                                    <div className="card-body">

                                        <h1 className="py-1 d-flex justify-content-start fw-bold " style={{ color: "teal", fontFamily: "initial" }}>{vid.description}</h1>
                                        <h1 className='d-flex justify-content-start' style={{ color: "teal", fontFamily: "initial" }}>{vid.title}</h1>
                                        

                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex py-2'>

                                                <button className='btn btn-outline-dark  rounded-pill' style={{ fontFamily: "initial" }}>Subscribe</button>
                                            </div>
                                            <div>
                                                <button onClick={likes} className='btn btn-light rounded-pill' style={{ color: "teal", fontFamily: "initial" }}><i className="bi bi-hand-thumbs-up"></i>Likes <span>{count}</span> </button>
                                                <button onClick={dislikes} className='btn btn-light rounded-pill' style={{ color: "teal", fontFamily: "initial" }}><i className="bi bi-hand-thumbs-down"></i>Dislike </button>
                                                <button onClick={() => shareVideo(vid)} className='btn btn-light rounded-pill' style={{ color: "teal", fontFamily: "initial" }}><i className="bi bi-share"></i>Share</button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Kits