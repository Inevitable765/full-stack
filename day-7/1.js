console.log("Hello world");
// undefined
//  NOTE-Null
// FIXME-when you stored a null value ina varaiable then check its datatype you will get 'object as its type
let lastnmae = null;
console.log(typeof lastnmae);

// NOTE - VAR
// NOTE in the case of of var we can redeclare and reassigned

//FIXME CASE  reassigned
var department = "CS";
department = "EC";
console.log(department);

// FIXME case2 declaration
var department = "civil";
console.log(department);

// NOTE-Let
// NOTE in the case of let we can reassign its value but cannnot declare it
let college = "techno";
college = "MNIT";
console.log(college);

// REDECLARATION of the variable name
//  let college='GIT'
// NOTE- CONST
// NOTE in the case of the const we cannot reassigned the value and not declare the variable name;

// const emoji='@';
// emoji='$';
// console.log(emoji);//we get the error here

//  TRUTH =those values whiach are not empty string ' ' ND 0
// FALSY values values=0,null,undefined,NaN,'',false
if ("") {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}



//  Function


const c=fulldetails('abc','xyz');
console.log(c);

function fulldetails(firstnamee,lastnamee){
  return ` my name is ${firstnamee} ${lastnamee}`;
}

//  Arrow function
let sum=(a,b)=> a+b;  //single line
console.log(sum(2,3));

let sum1=(a,b)=>{ //multiline 
  return a+b;
}
console.log(sum1(4,5));


// Objects
// OBJECT have properties which have keys and value pair
const myDetails={
  firstname:"Nikhil",
  age:2024-2003,
  friends:['Ram','Govind'],
  'two hunderd':200,
  address:{
    street:45,
    state:'Rajasthan',
    city:'jaipur'
  },
// ,fullDetails : function(){

//   console.log(`my name is ${this.firstname}`);
//   }

fullDetails(){
  console.log(`my name is ${this.firstname}`);
}
}
// accessing the values in the object;

// dot notation
console.log(myDetails.firstname);
console.log(myDetails.friends[0]);
// updating a existing property in the object
myDetails.firstname='Raj';
console.log(myDetails.firstname);
// adding a new property in the object
myDetails.address='jaipur'
console.log(myDetails);

// NOTE bracket notation
let a='age';
console.log(myDetails['age']);
console.log(myDetails[a]);

console.log(myDetails['two hunderd']);

console.log(myDetails.address.state);

myDetails.fullDetails();

// REVIEW - This keyword
// int the case of the Object this point to the object where it is used
// REVIEW - the functon we create in an objectare called "Methods"

// NOTE "For in" and "for of" loop specific in the js

const companies=['meta','google','netflix','IBM'];
// For in method
for(let index in companies)
{
  console.log(index);
}

// For of method
for(let company of companies)
{
  console.log(company);
}

const product={
  name:'TV',
  price:'Rs500000'
}

// using for in we can loop the objects
for(let key in product)
{
  console.log(`${key}:${product[key]}`);
}


// TODO-----------Remaining arrays method
// note- splice(index,deletecount,newelement)


const numberarry=[1,2,3,4,5,6,7];
const splicedoutput=numberarry.splice(1,1,8);
console.log(numberarry);
console.log(splicedoutput);



// FIXME SPLICED METHOD ALWAYS MODIFY ORIGINAL ARRAY
// NOTE 


// Note Slice method





const numberArray=[1,2,3,4,5,6,7];
const slicedoutput=numberArray.slice(1,3);
console.log('originalarray',numberArray);
console.log('sliceArray',slicedoutput);

// NOTE FOREACH 
// NOTE foreach accepts  callback function 
// NOTE call back function are those function which are pass in the params of other functions
// NOTE the function which accepts callback are caleed "higher oder function"
// NOTE int he case of the array we call them "higer order method" which accepts a callbaclk function

// REVIEW for creating a callback
// in arrow function =()=>{}
  // normal function =function(){
  // }


const forEachoutput=numberArray.forEach((el)=>{
  console.log(el)
})

console.log(forEachoutput);
// FIXME - for each method  always return UNDEFINED

// Note - MAP method (Higher order methods of array)

const mappedoutput=numberArray.map((el)=>{
  return el*2;
}
)

console.log(mappedoutput);

// Review - always returns a new array based on the transformation we performed using the callback
// Review - not modify orignal array

// NOTE FILTER (Higher order method or array )

const filteroutput=numberArray.filter((el)=>{
  return el*3;
})

console.log(filteroutput);
console.log(numberArray);

// NOTE FIND METHOD
// not return an array on return single value that match the condtion
const findoutput=numberArray.find((el)=>{
  return el>3;
})

console.log(findoutput);
console.log(numberArray);
// NOTE FINDindex