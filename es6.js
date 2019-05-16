/*
function sum(a,b)
{
    return a+b;
}
*/
//arrow function
let sum=(a,b)=>
{
    return a+b;
}

// default paramaters

function weight(mass, g=10){
    return mass*g;
}
// labset 1
var num=[1,2];
const numbers=[5,7,8];

let area_of_circle=(r=1)=>{
    return 3.14*r*r;
}

/*
for(let num of numbers)
{
    console.log(num);
}
*/

/*
function summation(...x){
    console.log(x);
    let total=0;
    for(let i of x){
        total=total+i;}
    return total;
}
*/

// lab set 2
let avg=(...x)=>{
    let total=0;
    for(let i of x){
        total=total+i;
    }
    return total/x.length;

}

/*
let cities=["jaipur","delhi","mumbai"];
console.log(...cities);
console.log("jaipur","delhi","mumbai");
*/

/*
var kid={ "name":"jonny" , "age":10};
console.log(kid);
var student={...kid, "subject":"maths"};
console.log(student);
*/

/*
const person={name:"harsh", age:20, city:"jaipur"};
const {name,age,city} = person;
console.log(name,age,city);

var cities=["delhi","jaipur","ajmer"];
console.log(cities);
var [a, ,b]=cities;
console.log(a,b);
*/

//lab set 3

function dest(){
var person = {name:"harsh", age:21, city:"ajmer"}
var {name,age,city}=person;
console.log(name,age,city);

var superHero={...person,superpower:"thunderbolt"}
var {name,age,city,superpower}=superHero;
console.log(name,age,city,superpower);
}

/*
var country="india";
var print=`my country is ${country} yes`;
console.log(print);
*/

/*

var x1=4;
var x2=5;
sum=`sum is ${x1+x2}`;
console.log(sum);

class People
{
    constructor(name){
        this.name=name;
    }
    getValue()
   {
       return this.name;

   }
   setValue(name)
   {
       this.name=name;
   }
}
*/



//lab set 4

class Animal{
    constructor(voice="talk"){
        this.voice=voice;
    }
    getVoice(){
        return this.voice;
    }
    setVoice(voice){
        this.voice=voice;
    }
}

const wolf= new Animal("howl");
console.log(wolf.getVoice());

export { Animal };
