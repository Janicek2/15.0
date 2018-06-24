//Task 1

const first = 'Hello';
const second = 'Word';

const add = `${first} + ${second}`;

//Task 2

const multiply = (a ='2',b ='5') => a * b;
const multiply1 = (x ='8') =>  x * 1 ;

//Task 3

const average = (...rest) => rest.reduce( (a,b) => a+b) / rest.length;
average(1);
average(1, 3);
average(1, 3, 6, 6);

//Task 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const average2 = (arr) => arr.reduce( (a,b) => a+b) / arr.length;
average2(grades);

//Task 5

const arrayone = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = arrayone;





