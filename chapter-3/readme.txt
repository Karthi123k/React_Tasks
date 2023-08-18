
Chapter–3
What is polyfill?
A polyfill is a piece of code that adds functionality to older browsers that have incompatibility issues.?

What Babel?
Babel is a JavaScript compiler that converts modern JavaScript code into a version compatible with all browsers. Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiler modern JavaScript for use in React components and all browsers.
How to get gitignore
Create repository
Then go to required path go to git bash there we can 
git clonehttps://github.com/Karthi123k/pull.git

After that 
  -> git init …. Let do after …(or)
or create a new repository on the command line
echo "# pull" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Karthi123k/pull.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/Karthi123k/createcoreapp.git
git branch -M main
git push -u origin main


ree shaking-> removing in wanted code 

Here I want use parcel bundle then every time when I want to run the code then every time type->  npm parcel index.html
Here I want remove the all the nonsense adding start in package.json
In scripts:
"start":"parcel index.html",
And also build the parcel cmd also add in script:
"build":"parcel build index.html",
Then cmd is npm run build

Here npx=npm run
Then using->  npm run start (or) npm start
Enough to run the code

Now check console log remove or not in the lur code once check it
If we have any console logs then go to 
babeljs.io or npm website there we have cmd paste in our console then installed.
npm i Babel
After the add Babel in the package.json file.
Now I. Want config

Babelrc is the configuration file  of babel.
.babelrc file create and paste the code in the docs
https://babeljs.io/docs/babel-plugin-transform-remove-console/



After that check the verify console logs in dist js files.


Add key attribute in individual  create elements 

Reacts.org /docs/reconciliation key
https://legacy.reactjs.org/docs/reconciliation.html
Does React use the key concept ?
A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. Keys are used to give an identity to the elements in the lists
 How does creating elements work?
CreatingElement  gives an object. The object in html.

CreatingElement is not good for a big structure of html then using the jsx.
If want to create 3 sebilling in the react in that time we can create the  one react.createElement one array and in that array we can again create a 3 sebilling s]


Thats the proper manner to create a react code. It very confusing and lengthy
Then  the Problem is solved with jsx.

Jsx-> javascript XML
Jsx syntax here 
const footer=(<h1> bfugshd<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img></h1>);

In jsx do an home work how to create multiple divs and IMG tags …


Components

Functional
Class

Here we will discuss the functional components
What is the difference between react element and functional component?

Functional components render with
root.render(<function name/>);

Here I want use my react element in component
 Or directly past the element .
 
Now we are used react component in a component


Or call the function
Like {Title()}


In react component having jsx code there we declare the {}. In that currlybrases we can write the js.
 Jsx sanitization?
Component composition?
Component in a component is called composition.
Jsx-> reactcreate element ->obj-> htmldom
////***///
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


   
