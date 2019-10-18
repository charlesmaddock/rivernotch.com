import React from "react"

const circleStyle = {

}

const Button = ({ children }) => (
  <div
    style={{
      backgroundColor: "#e3c89a",
      padding: "10px 20px",
      position: "relative"
    }}>
    <div style={{
      width: 8,
      height: 8,
      backgroundColor: "#755621",
      borderRadius: 6,
      position: "absolute",
      top: -3,
      left: -3
    }}/>

    {children}
  </div>
)

export default Button
