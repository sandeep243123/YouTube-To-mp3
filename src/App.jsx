import Header from "./Components/Header"
import Footer from "./Components/Footer"
import MainComponent from "./Components/MainComponent"
import "./App.css"
import Loader from "./Components/Loader"
import { useState } from "react"
function App() {
  const [loader,setLoader]=useState(false)
  return (
    <>
    <div style={{
      position: "fixed",
      left: "0",
      top: "0",
      width: "100%",
      color: "white",
      textAlign: "center"
    }}>
     <Header></Header>
    </div>

     <div className="container">
      <h1>Youtube To <p>MP3</p></h1>
      <MainComponent lvalue={setLoader}></MainComponent>
      <div className="loader">
        {loader&&<Loader></Loader>}
      </div>
     </div>
    
     <div style={{
       position: "fixed",
       left: "0",
       bottom: "0",
       width: "100%",
       backgroundColor: "#FF3D00",
       color: "white",
       textAlign: "center"
     }}>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App
