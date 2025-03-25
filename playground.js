//1.Define variables for user profile and calculating users ages
let username = "keza"; 
const birth_year=2004;
const current_year=2025;
const userAge= current_year-birth_year;
const message=`your username is ${username}, and you have ${userAge} years`;
console.log(message);
//Arrow functions

const calculateBirthyear = (userAge) =>current_year-userAge

console.log(`you were born in ${calculateBirthyear(21)}`);
//Destructuring

const user={name:"Keza", age:21, country:"Rwanda"};
const {name,age,country} = user;

console.log(`you are ${name}, you have ${age} years, you live in ${country}`);

const colors=["red","blue","yellow","green","white","black"];
const [first, second]=colors;
console.log(`you like ${first} and ${second} colors`);

// rest and spread

function sum(...num){
    return num.reduce((a,b)=>a+b,0);
}
console.log(sum(10,2,4));

const array1=[2,4];
const array2=[3,6];
const merged=[...array1, ...array2];
console.log(merged);

//Use Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true; 
        
        setTimeout(() => {
            if (success) {
                resolve({message: "Data fetched succesfully"});
            } else {
                reject("Oops! Something went wrong");
            }
        }, 2000); //  2-second delay
    });
}

// Call the function
fetchData()
    .then(response => console.log(response.message))
    .catch(error => console.log(error));

//REFLECTION QUESTIONS
//1. The result of current year- birth year its AGE, on our case it is 21 years
//2.string concatnation cause code complexity while template literal enhance readability of the code

//3. Destructuring allows you to extract values from arrays or objects into distinct variables.
//4.rest operator collects multiple elements into an array  while spread expands an array or object into individual element
//5.Promises provide a cleaner way to handle asynchronous operations compared to callbacks.
