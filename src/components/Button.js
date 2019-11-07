import React from "react"
import "./Button.css"
import button from '../assets/button.png'

const Button = ({ children }) => (
  <div className="Download-Button-Wrapper">
    <div
    className="Download-Button"
    style={{position: 'relative', textAlign: 'center'}}
    onClick={()=> console.log("click")}
    >
      <img
        src={button}
        alt="button"/>
      <p style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}>
        {children}
      </p>
    </div>
  </div>
)

export default Button
