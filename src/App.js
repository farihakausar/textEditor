import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import Alert from "./components/Alert";

// import { BrowserRouter , Route, Routes } from 'react-router-dom'


function App() {
const [mode, setmode] = useState("light")
const [alert,setAlert]=useState(null);
const showAlert=(messge,type)=>{
  setAlert({
    msg:messge,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000)
}
const toggleMode=()=>{
if(mode==="light"){
  setmode("dark")
  document.body.style.backgroundColor="#384d6c"
  document.body.style.color="black"
  document.title="Text UTLIS |dark mode";
  showAlert("dark mode enabled","success")
  // setInterval(()=>{
  //   document.title="Text UTLIS ";
  // },1500)
  // setTimeout(()=>{
  //   document.title="Text UTLIS see faetures ";
  // })
}
else{
  setmode("light")
  document.body.style.backgroundColor="white"
  document.body.style.color="black"
  document.title="Text UTLIS |light mode"
  showAlert("light mode enabled","success")
}}


  return (
    <>
    {/* <BrowserRouter>
    
      
    
     <div className="container my-3">
     <Routes>
       
          <Route exact path="/" element={<Navbar mode={mode}  title="TEXT UTILS"toggleMode={toggleMode}/>}/>
          <Route exact path="/"element={<Alert alert={alert}/>}/>
         <Route exact path="/about" element= {<About mode={mode}toggleMode={toggleMode}/>}/>
         
          <Route exact path="/text" element={ <Text   toggleMode={toggleMode} showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>}/>
         <Route exact path ="*"element={<h2>error page</h2>}/>
          </Routes>
          
         
          </div>
   
   
    </BrowserRouter> */}
    <Navbar mode={mode}  title="TEXT UTILS"toggleMode={toggleMode}/>
     {/* <Navbar title="itsme" aboutUs="8"/> */}
    <Alert alert={alert}/> 
    
      <Text    showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>
     <About mode={mode}/>
   
    </>
  );
}

export default App;
