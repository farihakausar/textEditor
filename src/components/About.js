import React, { useState } from "react";
// import Navbar from './Navbar'

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  })
  // let myStyle={
  //   color:props.mode==="dark"?"white":"#037ffd",
  //   backgroundColor:props.mode==="dark"?"#037ffd":"white",
  //   border:"2px solid ",
  //   borderColor:props.mode==="dark"?"#037ffd":"white"
  // }
  const[btnText,setBtnTextSy]=useState("enable blue mode")
  // let myStyle={
  //     color:"white",
  //     backgroundColor:"black",
  //     border:"2px solid purple"
  //    }
  // style={myStyle}  in div tag
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color:props.mode==="dark"?"white":"#037ffd",
    backgroundColor:props.mode==="dark"?"#037ffd":"white",
    border:"2px solid ",
    borderColor:props.mode==="dark"?"#037ffd":"white"
        // color: "black",
        // backgroundColor: "white"
      })
      setBtnTextSy("enable blueish mode")
    
    } else {
      setMyStyle({
        color:props.mode==="dark"?"#037ffd":"white",
        backgroundColor:props.mode==="dark"?"white":"#037ffd",
        border:"2px solid ",
        borderColor:props.mode==="dark"?"white":"#037ffd"
        // color: "white",
        // backgroundColor: "black"
      })
      setBtnTextSy("enable light mode")
    }
  };
  
  return (
    <>
    {/* // <Navbar/> */}
      <div className="container"style={myStyle}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne" style={myStyle}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item"style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item"style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="container my-3 text-center">
      <button   onClick={toggleStyle} className="btn btn-primary p-2  " >
        {btnText}
      </button>
      </div>
    </>
  ); 
}
