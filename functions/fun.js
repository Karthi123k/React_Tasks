//normal function with parameterzied function
function x(a)
{

console.log("hello bye"+a);
}
x(20);

//nested function
function x(a)
{

console.log("hello bye"+a);

var aa =()=>{
    console.log("arrow function");
   
} 
aa();
    var abc =  function()
    {
        console.log("experssion function");
       
    }
    abc();
 }

x(20);

// experssion function
var abc =  function()
{
    console.log("experssion function");
   
}
abc();

//arrow function
var aa =()=>{
    a=10;
  return a;
   
}  
var value1234= aa();
console.log("jkhjksdg"+value1234);

//anonymous function
(function()
{
    console.log("anonymous Function");
})
();

// object based functions with in function
const obj=
{
    name:"karthik",
};
function e()
{
console.log(this);
}
e.call(obj);

//functions with in objects
const obj2=
{
    name:"karthik2",

print:function()
{
console.log(this);
},
};
const obj3=
{
    name:"sri",

};
obj2.print(); 
obj2.print.call(obj3);




