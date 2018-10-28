console.log('running');




var tabla = document.querySelector('#tabla');
tabla.innerHTML = '<h1> Hellodddd </h1';


let tollboothcars = ['ferrari', 'bmw', 'mercedes', 'honda', 'ferrari'];
document.write('Vehicles seen today: <br />');
document.write(tollboothcars[0]);
document.write('<br />');
document.write(tollboothcars[1]);
document.write('<br />');
document.write(tollboothcars[2]);
document.write('<br />');
document.write(tollboothcars[3]);

let tollBoothWorkers = new Array('Julio', 'Abi', 'Brian');

document.write("<br /> ");
document.write("I went to luch with " + tollBoothWorkers[0] + ", " + tollBoothWorkers[1] + ", " + tollBoothWorkers[2]);



document.write("<br /> ");
document.write("<br /> ");
document.write('Now we use a loop : <br />');

document.write("<br /> ");
document.write("<br /> ");
for (let i = 0; i < tollboothcars.length; i++) {
  document.write(tollboothcars[i]);
  document.write('<br />');
}


document.write(tollboothcars.join(', '));
document.write('<br />');
//document.write(tollboothcars.sort());
document.write('<br />');
document.write(tollboothcars.join('-'));


document.write('<br />');
document.write(tollboothcars.lastIndexOf('ferrari'));

document.write('<br />');
document.write(tollboothcars.splice(2));

var bmwPos = tollboothcars.indexOf('bmw');


document.write('<br />');
//document.write(tollboothcars.splice(tollboothcars.indexOf('bmw')));

//document.write(tollboothcars.splice(bmwPos, 2, 'smart car'));

tollboothcars.splice(bmwPos, 0);

document.write(tollboothcars);


document.write('<br />');
document.write('<br />');

let newCars = [];

document.write(tollboothcars.filter((car) => car === 'ferrari'));
newCars = tollboothcars.filter(car => car === 'ferrari');
document.write('<br />');
document.write(newCars);
document.write('<br />');
document.write('<br />');
document.write(tollboothcars.filter((car) => car !== 'ferrari'));





var mammals = new Array("cat", "cat", "dog", "human", "whale", "seal");

for (var i = 0; i < mammals.length; i++) {
  document.write(mammals[i]);
}


var table = new Array(5);

table[0] = [45.89, 4, 34, 9998.99, 56];
table[1] = [3, 23, 99, 43, 2];
table[2] = [1, 1, 0, 43, 67];


// Quiz Slacks 
//Denis Sanchez Leyva [21:09]
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
document.write(arr1.filter(v => v === 'a'));


//Abi [21:15]
//5. Write a simple JavaScript program to join all elements of the following array into a string.

var myColor = ["Red", "Green", "White", "Black"];
document.write(myColor.join());
document.write("<br/>");
document.write(myColor.join(','));
document.write("<br/>");
document.write(myColor.join('+'));

//Ibis Fonte [21:16]
//looks good @Abi, Great Job!

//Abi [21:17]
//thank you

//Zakia Afrin Jeme [21:26]
//3.Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
var num_string_range = ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"];
document.write(num_string_range.fill('a', "z", 2));

//Nijhum jawad [21:31]
//1. Write a JavaScript function to clone an array.
var arrayClone = function (array1) {
  return array1.slice(0);
};
document.write(arrayClone([1, 2, 4, 0]) + "<br/>");

document.write(arrayClone([1, 2, [4, 0]]));

/*
Ibis Fonte [21:32]
Great job, Zakia.  Do number 11 next
Thank you @Nijhum jawad very impressive.  There were many ways to do this problem, and you chose the most efficient way.  See if you have time to do number 12

Abi [21:39]
10. Write a JavaScript program which prints the elements of the following array.
*/
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];

for (var i = 0; i < a.length; i++) {
  document.write("row " + i + "<br/>");
  for (var j = 0; j < a[i].length; j++) {
    document.write(" " + a[i][j] + "<br/>");
  }
}

//Brian Saint-Hilaire [21:41]
//6.

var numeric = [1025468]
var str = numeric.toString();
var answer = [str[0]];

for (let i = 1; i < str.length; i++) {
  if ((str[i - 1] % 2 === 0) && (str[i] % 2 === 0))

  {
    answer.push('-', str[i]);
  } else

  {
    answer.push(str[i]);
  }
}
console.log(answer.join(''));

/*
Nijhum jawad [21:43]
12. Write a JavaScript program to compute the sum and product of an array of integers.
*/
var array = [1, 2, 3, 4, 5],
  sum = 0;
product = 1;

for (var i = 0; i < array.length; i++) {
  sum = sum + array[i];
  product = product * array[i];
}
document.write("Sum : " + sum + "<br/>" + " Product :  " + product);

/*
julio is cool [21:47]
#4
*/
var last = function (array, n) {
  if (array == null)
    return void 0;
  if (n == null)
    return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

document.write(last([7, 9, 0, -2]));
document.write('<br/>');
document.write(last([7, 9, 0, -2], 3));
document.write('<br/>');
document.write(last([7, 9, 0, -2], 6));


/*
Zakia Afrin Jeme [21:56]
11. Write a JavaScript program to find the sum of squares of a numeric vector.
*/

var array = [0, 1, 2, 3, 4];
var sum = 0,
  i = array.length;
while (i--) {
  sum += Math.pow(array[i], 2);
}
document.write(sum);