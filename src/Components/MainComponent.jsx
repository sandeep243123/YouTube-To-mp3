import React, { useState } from 'react'
import "./css/MainComponent.css"
import { searchResult } from '../service/SearchUrl.js'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function MainComponent({lvalue}) {
  const notify = (e) => toast.error(e);
  const [url,setUrl]=useState("");
  const handleDownload =async () => {
    lvalue(true);
    const result=await searchResult(url)
    if (result) {
      window.open(result);
    }else{
      notify("Invalid URL!")
    }
    lvalue(false);
  }
  return (
    <div className='mainContainer'>
      <input type="text"  placeholder='Enter youtube URL' onChange={(e)=>setUrl(e.target.value)}/>
      <button className="button type1" style={{margin:"15px"}} onClick={handleDownload}>
        <span className="btn-txt">Download</span>
      </button>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick  
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
/>
    </div>
  )
}

export default MainComponent
