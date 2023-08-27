Chapter-5

Export -> 2types 
Here some title function 
Default export
Syntax -> export default Title;
Then import means  default import syntax ->
Import Title from "./component/Title";

Another way is  by name means function prefix add the default keyword

default const Title= ()=>{};
Then import name is name important 
import {Title} from"./components/Title";
Or 
import * as obj from"./components/Title";
Or 
import {Title,Head} from"./components/Title";
Or 
import Header, {Title} from"./components/Title";
Or 
import {Title} from"./components/Title.js";
 If you write a code in jsx then we can change the extension with.jsx.

Here the previous app  can be divided into file structure using export and import wise. Like components,src…etc.like…
Now I want to look for a search..
In my body
What is statehooks,usestate, usestate variables
Why is use state used in React?
What is the useState Hook? useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
Hooks
Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. (We don't recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you'd like.)

?
What is e.targetvalue?
Events are objects with certain properties, and e. target almost always represents a DOM element. Thus e. target. value is the value property of some DOM element, in this case that means the text entered in the search input.
Local State variable in react
const [searchText,setSearchText]= useState("kfc");//to create State variable
  Use state import from react
///** in this chpater we looks about import and export types  and search button inbulit useing onclick and onchage events as well usestate use in react...

Use state returns the array .
The array looks likes  const [var name,setvarnaeme]=useState("props");
Another example for usestate onclick 
And looks abou toogle  in the true or false. For only understanding
  Now we look about search functionality
 On click buttonin that function define the filter function beforethis function define react usestate variable 


https://docs.google.com/document/d/1JQw2Rto0dbQ49e9LFQpmnkwxJSK8hFOk02m_fLW8IGg/edit

