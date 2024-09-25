// Declaration d'une constante, d'une variable let et d'une variable var

const myConst=0
let myLet=0
var myVar=0

myLet=1


//Declaration d'une fonction

function sayHello() {
    return "Hello"
}

function sayHelloToMe(name,age){
    return `Hello ${name}, you are ${age} years old`;
    
}

console.log(sayHelloToMe("John", 25));

const add = (a,b) => {
    return a+b;
}

const age = 25; // Define the age variable

if (age < 50) {
    console.log("You are still young");
}

//EXERCICE 1

//1.1 declaration de 2 varribre et echanger leur valeur avec une troisieme variable
let a=1
let b=5
let c=a
a=b
b=c
console.log(a,b)

//1.2 Ecrire une fonction de multiplication vefiriznt que 2 entrée sont des nombre
function multi(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a * b;
}
console.log('Le produit est ',multi(2,3))

//1.3 Ecrire une fonction qui salue un utilsateur , en prenan son nom en entre
function sayHelloAndNAme(name){
    return 'hello '+name
}
console.log(sayHelloAndNAme('John'))

//1.4 ecrire une fonction qui renvoie la parité d'un nombre
let nombre;
function parite(nombre){
    if (nombre % 2 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(parite (10))

//1.5 Ecrire une fonction qui prend un objet en parametre, et qui met 
// la propriéte age a 30.  Logger le résultat ainsi que la variable que 
//vous lui passez après que la fonction soit exécutée.

function setAgeTo30(obj) {
    obj.age = 30;
    console.log('Updated object:', obj);
}

const person = { name: 'John', age: 25 };
setAgeTo30(person);
console.log('Original object after function call:', person);


// TABLEAU
const nombreTableau=[1,2,3,4,5,6,7,8,9,10]
const stringTableau=['a','b','c','d','e','f','g','h','i','j']   
const tableauMixe=[1,'a',2,'b',3,'c',4,'d',5,'e']

nombreTableau.push(11) // ajpouter un element a la fin du tableau
nombreTableau.indexOf(6) // retourne l'index de l'element 5
nombreTableau.find((x)=>x%5==0) // retrouve le premier element qui verifie la condition
nombreTableau.findIndex((x)=>x%5==0) // retourne l'index du premier element qui verifie la condition    
nombreTableau.filter((x)=>x%2==0) // retourne un tableau avec les elements qui verifie la condition
nombreTableau.map((x)=>x*2) // retourne un tableau avec les elements transformés par la fonction
nombreTableau.reduce((acc,x)=>acc+x,0) // retourne la somme des elements du tableau