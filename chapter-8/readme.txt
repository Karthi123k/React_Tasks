Chapter-8

Childers of childers create an outlet. Outlet created in the parent page only.
 Now we discuss the class components.
 Syntax:
;
We use the same import process.
}
// we can create class component without render method.class component return the jsx. Using render().
 In functional component props send one page another page
page:1
<profile name={”karthik”}/>
page:2
Const profile=(props)=>
{
Name :{props.name}
}
 
Now we look on classcomponent props get
Import React from”react”;
 Class classname extends React.Component
{
render()
{
Return{
<h1> hello</h1>
Name :{this.props.name}

}
}
Export default classname;
  When we create the constructor in class component then we declare the super props also
constructor is the place for using initialization . so this is the best place to create a state.
We use  different use state conditions 
First constructor next render then componentDidMount ->we have the same lifecycle methods.
componentDidMount();// after render in class component
Let we discuss about an example 


We  have constructor area fist execute
Next render area execute-> in this render return the child page means callback pages in that page also have the class process then follow the same process->constructor,render, componentDidMount.
Next parent page call the componentDidMount();
Now we have two children then

Once look lifecycle


Why do we declare componetDidMout with async function and why we can’t declare the async with useEffect.?
Why can t we use async in useEffect?
Why async callbacks cannot be used in useEffect. Let's understand the reasons why an asynchronous callback function cannot be called directly from a useEffect() hook. This is because the useEffect hook expects its effect function to return either a cleanup function or nothing at all.
React api call componentDidMount

Process

componentDidUpdate()
componentWillUnMount()

Useeffect and componetDidUpdating

Useefexct is render based on depancy if with an array then rendeder very render after.
In the classcomponet componentDidUpdate is render after change the child renders.
Now we discuss about the componentWillUnMount()
componentWillUnMount() call when we leave the page in that time called this function with an example set interval


How do you create Nested Routes react-router-dom configuration?\
https://www.geeksforgeeks.org/implement-nested-routes-in-react-js-react-router-dom-v6
What is nested routing in react router?
Nested routing means routes inside another route. By the way, only using the nested route is having limitations and that is every time when we try to open the nested child component pages. It will only show or render the parent component page only.
Why we use nested routes in react?
We use nested routing in our application so that a parent component has control over its child component at the route level.
// ## Namaste React Course by Akshay Saini
// # Chapter 07 - Finding the Path


import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};


// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter




Read aboutt createHashRouter, createMemoryRouter from React Router docs?

https://reactrouter.com/en/main/routers/create-browser-router
https://reactrouter.com/en/main/routers/create-hash-router
https://reactrouter.com/en/main/routers/create-memory-router
What is the order of life cycle method calls in class based components?
https://www.w3schools.com/react/react_lifecycle.asp

Why do we use componentDidMount?
componentDidMount is the final step of the mounting process. Using the componentDidMount() method, we can execute the React code when the component has already been placed in the DOM (Document Object Model). It is used for handling all network requests and setting up subscriptions.
What is the difference between useEffect and componentDidMount in Reactjs?
componentDidMount and useEffect run after the mount. However useEffect runs after the paint has been committed to the screen as opposed to before. This means you would get a flicker if you needed to read from the DOM, then synchronously set state to make new UI.

Why do we use componentWillUnmount? Show an example?
The componentWillUnmount() method allows us to execute the React code when the component gets destroyed or unmounted from the DOM (Document Object Model). This method is called during the Unmounting phase of the React Life-cycle i.e before the component gets unmounted.

(Research) Why do we use super(props) in constructor?
The purpose of using the super constructor with a props argument is to allow a component to inherit the properties of its parent component and also pass in additional properties as arguments to the component.
(Research) Why can’t we have the callback function of useEffect async?
Why async callbacks cannot be used in useEffect. Let's understand the reasons why an asynchronous callback function cannot be called directly from a useEffect() hook. This is because the useEffect hook expects its effect function to return either a cleanup function or nothing at all.
