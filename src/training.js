//Similar to Python.
// var name = "Denis";

// function print_name() {
//   console.log("Hello " + name);
// }

// print_name();

// let x = 1;

// x++;

// if (x > 3) {
//   console.log("x is greater than 3");
// } else if (x == 3) {
//   console.log("x is 3");
// } else {
//   console.log("x is lower than 3");
// }

// let upto = 100;
// let fizzfactor = 3;
// let buzzfactor = 10;

// for (let num = 1; num <= upto; num++) {
//   if (num % fizzfactor == 0 && num % buzzfactor != 0) {
//     console.log("fizz");
//   } else if (num % buzzfactor === 0 && num % fizzfactor !== 0) {
//     console.log("buzz");
//   } else if (num % fizzfactor == 0 && num % buzzfactor == 0) {
//     console.log("fizz buzz");
//   } else {
//     console.log(num);
//   }
// }
// var balls = document.querySelectorAll(".ball");
// console.log(balls.length);
// boxs.innerHTML = season[0];
//console.log(boxs);

//boxs.forEach((x) => (x.style.backgroundColor = "white"));

// var shows = [
//   {
//     title: "Lupin",
//     series: 3,
//     episodes: 20
//   },

//   {
//     title: "Tobey",
//     series: 2,
//     episodes: 21
//   },

//   {
//     title: "Coffee",
//     series: 5,
//     episodes: 24
//   }
// ];

// var lessThan3 = shows.filter((x) => x.series <= 3);

// console.log(lessThan3);
// var nimals = ["cat", "dog", "mouse"];

// var another2 = nimals.every((x) => x.length === 3);

// console.log("fist = " + another2);

// const animals = ["cat", "rat"];

// console.log(animals.every((animal) => animal.length === 3));
// var sentence = "the cat in the hat";
// var words = sentence.split(" ");
// console.log(words[2]);

// farenheith to celcius;
// var farenheit = [32, 0, 23];
// function getCelcius() {
//   return farenheit.map((x) => ((x - 32) * 5) / 9);
// }
// console.log(getCelcius());
// var sentence = ["the", "cat", "in", "the", "hat"];
// function getTotal() {
//   return sentence.reduce((total, x) => total + x.length, 0);
// }
// console.log(getTotal());

//check if all nums sqrt
// var num = [81, 16];

// function sqNums() {
//   return num.every((x) => Math.sqrt(x) % 1 == 0);
// }

// console.log(sqNums());

//return words if word length is >= 5
// var words = ["there", "is", "a", "dinosaur", "here"];
// var wordLength = 3;

// function getWords(words, wordLength) {
//   return words.filter((word) => word.length >= wordLength);
// }

// console.log(getWords(words, wordLength));

//convert 34cm to 32

// function getValues(lengths) {
//   return lengths.map((x) => parseFloat(x));
// }

// console.log(getValues(["34cm", "32cm", "23cm"]));

//counts number of vowels in a sentence.
// var sentence = "the lazy fox jumped over the log";
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// function vowelCount() {
//   var theVowels = sentence.split("").filter((x) => vowels.includes(x));
//   return (
//     "The Vowels: " +
//     theVowels +
//     "\nTotal Number of Vowels :  " +
//     theVowels.length
//   );
// }
// console.log(vowelCount());

//counts number of vowels in a sentence.
// var sentence = "the lazy fox jumped over the log";
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// function vowelCount() {
//   var theVowels = sentence.split("").filter((x) => vowels.includes(x));
//   return (
//     "The Vowels: " +
//     theVowels +
//     "\nTotal Number of Vowels :  " +
//     theVowels.length
//   );
// }
// console.log(vowelCount());

//addEventListener

// var body = document.querySelector("body");

// body.addEventListener("click", function () {
//   console.log("clicked");
// });

//removeEventListener

// var box = document.querySelector(".box");
// let count = 0;
// function toggleColor() {
//   box.classList.toggle("pinkbox");
//   count++;
//   console.log(count);
//   if (count > 0) {
//     box.removeEventListener("click", toggleColor);
//   }
// }

// box.addEventListener("click", toggleColor);

//Random decision maker

// var num = Math.random();
// console.log(num);
// if (num <= 0.5) {
//   console.log("no");
// } else {
//   console.log("yes");
// }

//What game to play

// var boardGames = ["Chess", "Snakes and Ladders", "Monopoly", "Cards"];

// var randNum = Math.random() * boardGames.length;
// var randInt = Math.floor(randNum);
// var game = boardGames[randInt];

// console.log(randNum, randInt, game);

//spy message
// var time = 5000;
// var box = document.querySelector(".box");
// var message = "This message will self destruct in " + time / 1000 + " seconds.";
// function text() {
//   if (time == 1000) {
//     box.innerHTML = "This message will self destruct in 1 second.";
//   } else {
//     box.innerHTML = message;
//   }
// }
// function disappear() {
//   box.style.display = "none";
// }
// text(message);
// setTimeout(disappear, time);

//Elaborate spy message

// var box = document.querySelector(".box");
// var message = "Your mission if you choose to accept is to nod once.";
// var letters = Array.from(message);
// var time = 5000;
// let i = 0;
// var display = "";
// function test() {
//   if (i < letters.length) {
//     display = display += letters[i];
//     box.innerHTML = display;
//     i++;
//   } else if (i < letters.length + 30) {
//     i++;
//   } else
//     box.innerHTML =
//       "This message will self destruct in " + time / 1000 + "seconds";
// }
// function disappear() {
//   box.style.display = "none";
// }

// var timeout = time + letters.length * 100 + 3000;
// setInterval(test, 100);
// setTimeout(disappear, timeout);

// controllable smiley face with blink.
// var mouth = document.getElementById("mouth");
// var eyeleft = document.getElementById("eyeleft");
// var eyeright = document.getElementById("eyeright");

// function control(e) {
//   switch (e.key) {
//     case "ArrowUp":
//       console.log("up pressed");
//       mouth.className = "smile";
//       break;
//     case "ArrowDown":
//       console.log("down pressed");
//       mouth.classList.remove("smile");
//       mouth.classList.add("frown");
//       break;
//     default:
//       console.log("key not recognised.");
//   }
// }

// var blink = function () {
//   eyeleft.className = "eyeclosed";
//   eyeright.className = "eyeclosed";
//   setTimeout(function () {
//     eyeleft.className = "eyeopen";
//     eyeright.className = "eyeopen";
//   }, 200);
// };

// setInterval(blink, 5000);
// document.addEventListener("keydown", control);
