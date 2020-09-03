import React from 'react'

const blue = "#008CBA"
const green = "#4CAF50"

const style = {
  backgroundColor: green,
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px"
}


export default (props) => <button {...props} style={style} />