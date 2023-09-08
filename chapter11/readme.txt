Chapter-9
Custom Hook? Purpose readability, maintainability, reliability,testability,modularity.
Why ? when? How?
Create useOnline hook?
For check we are in online or offline
When we create event listenser while remove the end the of the task.\
Chunking or code spliting/ dynamic bundling// lazy loading
Create instamart?
Lazy function?
Suspense form react?
in this case instmart bundle is different file from main bundle.


Fallback in the lazy function suspense.
https://legacy.reactjs.org/docs/hooks-custom.html
https://legacy.reactjs.org/docs/code-splitting.html
https://react.dev/reference/react/lazy

When and why do we need lazy()?
lazy() allows developers to easily create components with dynamic imports and render them as normal components. When the component is rendered, it will automatically load the bundle that contains the rendered component. You need to provide a single input parameter to call React. lazy().
What is suspense?
<Suspense> lets you display a fallback until its children have finished loading. Suspense is a new feature that lets your component “wait” for something before it can render. Some of the use cases where it is used are data fetching and waiting for images, scripts, and other asynchronous work to load.
 Why we got this error: a component suspended while responding to synchronous input. This will cause the ui to be replaced with a loading indicator.
To fix, updates that suspend should be wrapped with startTransaction? How does suspense fix this error?
The error message you've encountered, "a component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator," suggests that a React component has suspended while it was in the process of handling synchronous input. In React, suspension occurs when a component is waiting for some asynchronous data or a resource to be available before it can continue rendering. When this happens, React typically displays a loading indicator or placeholder UI until the data is ready.
To fix this error and improve the user experience, you can use React's Suspense feature along with the startTransition function. Suspense allows you to declaratively specify that a component is waiting for some data to load, and startTransition allows you to mark a transition point in your component where it can suspend without immediately rendering a loading indicator.
Here's how Suspense and startTransition work together to fix this error:
Use Suspense: Wrap the part of your component that depends on asynchronous data or resources with a Suspense component. This tells React that the component might suspend while waiting for the data.
Use startTransition: Within your component, use the startTransition function to mark the point where the component can suspend. This function takes a callback function as an argument, and any asynchronous work within that callback will not block rendering. Instead, React will keep rendering the current UI until the callback completes.
Here's an example of how you might use startTransition:

import { Suspense, startTransition } from 'react';

function MyComponent() {
  const fetchData = () => {
    // Simulate fetching data asynchronously
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data is ready!");
      }, 2000);
    });
  };

  const handleClick = async () => {
    startTransition(() => {
      fetchData().then((data) => {
        // Handle the data when it's ready
      });
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Load Data</button>
      <Suspense fallback={<LoadingIndicator />}>
        {/* Content that depends on the data */}
      </Suspense>
    </div>
  );
}

In this example, when you click the "Load Data" button, it uses startTransition to handle the data fetching asynchronously, and React will keep rendering the UI without immediately showing the fallback loading indicator.
Using Suspense and startTransition in this way helps improve the user experience by allowing your UI to remain responsive while waiting for asynchronous data, and it avoids displaying loading indicators prematurely.

Advantages and disadvantages of using this code splitting pattern?

What are the advantages of code splitting?
Code splitting can provide several advantages for your JavaScript performance, such as faster initial loading, better caching, and enhanced user experience. By splitting your code into smaller chunks, you can reduce the size of your main bundle and the time it takes to download, parse, and execute it.
What are the disadvantages of code splitting?
However, using code splitting and lazy loading in your React Native app can also have some drawbacks, such as increased complexity in development and testing processes, more network requests that can affect performance, and additional code and dependencies that can increase the bundle size.

When do we and why do we need suspense?
Suspense is a feature for managing asynchronous operations in a React app. It lets your components communicate to React that they are waiting for some data. It is important to note that Suspense is not a data fetching library like react-async, nor is it a way to manage state like Redux.

