console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)

// for loop
for (let i=0; i<4; i++){
  console.log(i);
} // end for

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

// for loop
for (let i=0; i<6; i++){
  console.log(i);
} // end for

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

// fot loop
for (let i=3; i<6; i++){
  console.log(i);
} // end for loop

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// for loop
for (let i=1; i<11; i++){
  if (i%2==0 && i<11) {
    console.log(i);
  }
} // end for loop

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

// for loop
for (let i = 5; i>-1; i--){
  console.log(i);
} // end loop

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

// for of loop
for (name of stars){
  console.log(name);
} // end for of loop

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

// while loop
while (stars.length >= 1){
  console.log(stars[0]);
  stars.shift();
} // end while

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let i = 0
// while loop
while (i <= 5){
  console.log(i);
  i++;
} // end while

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

i = 10
// while loop
while (i > 4 && i <= 10){
  console.log(i);
  i--;
} // end while
