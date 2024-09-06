import React from "react";
import './css/test.css';
import Test_slider from "./Test_slider";

const Test = () => {
  return (
    <div className="wrapper">
      <div className="testimonial">
        <div className="about">
          <div>
            <h1>What people say about us?</h1>
            <hr style={{ backgroundColor: "#c02121" }} />
          </div>
        </div>
       
          <div className="test" style={{ display: "flex", justifyContent: "center" }}>
          <Test_slider />
            </div>
         
              </div>
    </div>
  );
};

export default Test;
