
import {Header,Title} from"./components/header";
import Body from"./components/body";
import Footer from"./components/footer";
import React from "react";
import ReactDOM from "react-dom/client";



/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo


// Header component for header section: Logo, Nav Items

// RestaurantList is JSON Data for displaying cards

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

/*
****map example***
 const arr =[1,2,3,4];
const double=(x)=>{
  return x*2;
};

 const b= arr.map(double);
 console.log(b);
  

const arr = [1, 2, 3, 4, 9];
const double = (x) => {
  return x * 2;
};
const b = arr.filter((item) => double(item) > 5);

console.log(b);

*/

const airbnbExperiences = [
	"Walk in the woods",
	"Local cooking class", 
	"Guided tour"
];

// creating a shallow copy of the array using
// the spread syntax

const airbnbExperiences1 = [...airbnbExperiences];

console.log(airbnbExperiences1); 
// Footer component for footer section


// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      
      <Header/>
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);