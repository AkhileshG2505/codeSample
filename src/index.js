import React from "react";
import ReactDOM from "react-dom";

var name = "akhilesh";
var lname = "ghanur";
var number = 25;
var currentYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p> Created by {name + " " + lname} </p>
    <p> copyright {currentYear} </p>
  </div>,
  document.getElementById("root")
);
