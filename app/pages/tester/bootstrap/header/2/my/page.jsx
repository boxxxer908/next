import React from "react"
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css"

export default function Btn() {
  return (
    <>
      <div className="container d-flex p-5 justify-content-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Menu 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu 3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu 4
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
