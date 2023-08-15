import React from "react";
import ReactDOM from "react-dom/client";

         const headingStyles = {
            color:'red',
            backgroundColor: 'yellow',
        }
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style:headingStyles,
  },
  "Heading 1 from PRACEL ",
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title3",
  },
  "Heading 2",
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

//console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(container);

   