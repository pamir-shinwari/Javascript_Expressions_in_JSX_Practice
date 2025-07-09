//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import ReactDom from "react-dom/client";

const name = "Pamir Shinwari";
const date = new Date();

root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {date.getFullYear()}</p>
  </div>
);
