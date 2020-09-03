import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'

const Showroom = () => <div>
  <h1>Our React components</h1>
  <table>
    <tr>
      <td>The Button component:</td>
      <td>
        <Button onClick={() => alert('well done!')}>Click me!</Button>
      </td>
    </tr>
  </table>
</div>

ReactDOM.render(<Showroom />, document.getElementById("app"))
