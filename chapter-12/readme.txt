Chapter-12
Redux?
In react redux we can't direct update cart in redux store via dispatch and action call the function that function will be change the cart.
That function know as reducer.
Selector get the cart information of redux store slice after reducer function applied.
Selector is the hook .

Now we need redux lib
npm i @reduxjs/toolkit
Mange redux store 
npm i react-redux
Bridge between redux and react
 Create store
And provider the applayout
 Create slice in another file
Useselector from react-redux import in header file
 Add item button in resturantmenu file
 In the button onclick function in the function handleadditem function in the function definition dispatch additemand here 
Dispatch is the hook from react-redux
Call as a useDispatch();



After that add the basic cart using real data after that create a cart page in two ways look 2 screen shots
Additembutton completely header,resaturantmenu,App.js,store and cartSlice.js
 Add food item file in components.


Then apply clear the cart.
React developer tools and redux DevTools. Best one.

 Theory

UseContext vs Redux?
https://www.geeksforgeeks.org/whats-the-difference-between-usecontext-and-redux/
The difference between Context API and Redux lies in how they handle state changes. Redux takes a centralized approach, where state changes are managed in a central store. On the other hand, Context API deals with state changes on a components level, as they happen within each component.
Advantage of using Redux toolkit over redux
Reasons for preferring RTK(Redux ToolKit):
RTK gives the ability to write mutable state updates in the reducers. It also eliminates the use of extra coding by providing boilerplates. RTK also has the feature of RTK query which eliminates the use of Thunks and makes the query processing faster.
Explain dispatcher?
Dispatching actions in Redux is the fundamental method of updating a Redux store's state . Actions are used to store relevant information for the state , and they reach the store through the dispatch() method available on the store object.
Explain Reducer?
Reducers, as the name suggests, take in two things: previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state. So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state
Explain Slice?
A slice is the portion of Redux code that relates to a specific set of data and actions within the store 's state. A slice reducer is the reducer responsible for handling actions and updating the data for a given slice.
Explain Selector?
A selector is a pure function that takes a state object from the Redux store and returns some information extracted from that state object. Selectors are most commonly used in mapStateToProps functions to provide data to your React components.
Explain createSlice and the configuration takes?
A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. This API is the standard approach for writing Redux logic
What is the difference between createStore and configureStore?
The configureStore here replaces the original createStore from Redux. Unlike createStore, configureStore from Redux Toolkit not only creates a store but can also accept reducer functions as arguments and automatically sets up the Redux DevTools Extension for easy debugging.
