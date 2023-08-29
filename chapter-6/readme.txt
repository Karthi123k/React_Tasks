--> USEEFFECT --SEARCH BUTTON --> SHIMMER UI --> LOGIN/LOGOUT CONDITIONAL STATEMENTS -> OPTIONAL CHAINING


https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING
Chapter-6
 What is micro service?
Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.
What is monolith service?
Monolithic applications typically consist of a client-side UI, a database, and a server-side application. Developers build all of these modules on a single code base. On the other hand, in a distributed architecture, each microservice works to accomplish a single feature or business logic.
What is difference between monolith and microservice?
A monolithic application runs on a single server, but microservices applications benefit more from the cloud environment.
Why do we need a useeffect hook?

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
Syntax :useEffect(()=>{//information },[dependencies]);
What is optional chaining?
Optional chaining is a process for querying and calling properties, methods, and subscripts on an optional that might currently be nil . If the optional contains a value, the property, method, or subscript call succeeds; if the optional is nil , the property, method, or subscript call returns nil .

Optional chaining (?.) The optional chaining ( ?. ) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null , the expression short circuits and evaluates to undefined instead of throwing an error.
example:let Value = user.dog?.name;
What is Shimmer Ui?
A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.
What is the difference between js expression and statement?
The Main Differences Between an Expression and a Statement in Programming. Expressions can be assigned or used as operands, while statements can only be declared. Statements create side effects to be useful, while expressions are values or execute to values.
What is conditional Rendering, Explain with a code example?
Conditional rendering in React refers to the practice of rendering different content or components based on certain conditions or criteria. This allows you to dynamically display content in your React application depending on the state of your application or the data you have. Conditional rendering is often achieved using JavaScript's if statements, ternary operators, or logical operators within JSX.
import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false // Example state variable for conditional rendering
        };
    }

    render() {
        // Conditional rendering using if-else
        if (this.state.isLoggedIn) {
            return <div>Welcome, User!</div>;
        } else {
            return <div>Please log in to continue.</div>;
        }

        // Conditional rendering using a ternary operator
        // return this.state.isLoggedIn ? <div>Welcome, User!</div> : <div>Please log in to continue.</div>;

        // Conditional rendering using logical AND operator
        // return this.state.isLoggedIn && <div>Welcome, User!</div>;
    }
}

export default Greeting;

What is cors?
Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.

What is async and await?
What is Async Function ?
Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
Example 1: In this example, we will see the basic use of async in JavaScript.
const getData = async () => {
	let data = "Hello World";
	return data;
}

getData().then(data => console.log(data));

What is Await Function ?
Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
Example 2: This example shows the basic use of the await keyword in JavaScript.
const getData = async () => {
	let y = await "Hello World";
	console.log(y);
}

console.log(1);
getData();
console.log(2);


What is the use of const json = await data.json(); in get Restaurants()

The line const json = await data.json(); in a function named getRestaurants() is commonly used when making HTTP requests in JavaScript or a JavaScript-based framework/library like React. Let's break down its purpose and usage within this context:
HTTP Request:
It's likely that getRestaurants() is a function used to make an HTTP request to fetch data from an API or server, possibly for a list of restaurants.
await Keyword:
The await keyword is used inside an async function to pause the execution of the function until the awaited promise is resolved. In this case, it's often used with the fetch() function, which returns a promise that resolves to the HTTP response.
data.json():
The data object is the HTTP response obtained from the server using the fetch() function. The .json() method is used on the response object to parse the response body as JSON. This method also returns a promise that resolves to the parsed JSON data.
const json = await data.json();:
This line is assigning the parsed JSON data from the response to a variable named json.
The await keyword ensures that this line doesn't proceed until the JSON data is fully parsed and available. It essentially waits for the JSON parsing to complete.
Once the parsing is complete, the JSON data is stored in the json variable, and you can then work with this data in the rest of the function.
Here's an example of how this code might be used in the context of fetching restaurant data:
javascript
example
async function getRestaurants() {
    try {
        const response = await fetch('https://api.example.com/restaurants');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json(); // Parse the response JSON
        // Now, you can work with the JSON data stored in the 'data' variable.
        
        // For example, you might return the parsed data or process it further.
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Usage:
getRestaurants().then((restaurants) => {
    console.log(restaurants); // Handle or display the fetched restaurant data here.
});
