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
    key:"h1",
    style:headingStyles,
  },
  "Heading 1 from PRACEL ",
);



const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading]
);

//console.log(heading);

// this is jsx in react 
//in this  jsx code will convert like createElement like that but here babel can handel the all thhis things.

const footer=(<h1> bfugshd<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img></h1>);

//components of react (class and functions)
// here i want  to code in functional
const Head=()=>
{
 //perentasis added wehn we use multioples divs
 return (
  <div>

  <h1> this is component in component </h1>
  </div>
  );
}
const Header2=()=>
{
 //perentasis added wehn we use multioples divs
  // two option for component in component printing  <Head/> or   {Head()}
 return (
  <div>
 <Head/>

  {Head()}

  {footer}
  <h1> this is functional react </h1>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
//root.render(footer);
root.render(<Header2/>);


   