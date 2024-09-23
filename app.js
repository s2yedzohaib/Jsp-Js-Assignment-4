// Chp Array 

// // Q1
// const studentNames = [];

// // Q2.
// const studentNamesObj = new Array();

// // Q3.
// const stringArray = ["apple", "banana", "cherry"];

// // Q4.
// const numberArray = [1, 2, 3, 4, 5];

// // Q5
// const booleanArray = [true, false, true];

// // Q6
// const mixedArray = ["hello", 42, true, null];

// // Q7
// const qualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD"
// ];

// document.write("Qualifications:<br>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write(`${i + 1}) ${qualifications[i]}<br>`);
// }

// Q8
// const studentNames = ["Michael", "John", "Tony"];

// const studentScores = [320, 230, 480];

// const totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//   const score = studentScores[i];
//   const percentage = (score / totalMarks) * 100;
//   console.log(`Score of ${studentNames[i]} is ${score}. Percentage: ${percentage.toFixed(2)}%`);
// }

// Q9
// const colors = ["red", "green", "blue", "yellow"];

// console.log("Initial array:", colors);

// // a
// const colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);
// console.log("Array after adding to the beginning:", colors);

// // b
// const colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);
// console.log("Array after adding to the end:", colors);

// // c
// colors.unshift("purple", "orange");
// console.log("Array after adding two more colors to the beginning:", colors);

// // d
// colors.shift();
// console.log("Array after deleting the first color:", colors);

// // e
// colors.pop();
// console.log("Array after deleting the last color:", colors);

// // f
// const indexToAdd = parseInt(prompt("Enter the index to add a color at:"));
// const colorToAddAtIndex = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAddAtIndex);
// console.log("Array after adding color at index:", colors);

// // g
// const indexToDelete = parseInt(prompt("Enter the index to delete colors from:"));
// const numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numberOfColorsToDelete);
// console.log("Array after deleting colors at index:", colors);

// // Q10
// const studentScores = [320, 230, 480, 120];
// studentScores.sort((a, b) => a - b);
// console.log("Ordered Scores of Students:", studentScores);

// // Q11
// const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// const selectedCities = cities.slice(2, 5);
// console.log("Selected cities list:", selectedCities);

// //Q 12.
// const arr = ["This", " is", "my", "cat"];
// const joinedString = arr.join(" ");
// console.log("Joined string:", joinedString);

// Q13
// const devices = ["keyboard", "mouse", "printer", "monitor"];

// for (let i = 0; i < devices.length; i++) {
//   console.log("out:");
//   console.log(devices[i]);
// }
// Q    14
// const devices = ["keyboard", "mouse", "printer", "monitor"];

// for (let i = devices.length - 1; i >= 0; i--) {
//   console.log("Out:");
//   console.log(devices[i]);
// }

// Q15
// const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Create a dropdown/select menu using document.write()
// document.write('<select id="phoneManufacturersSelect">');

// for (let i = 0; i < phoneManufacturers.length; i++) {
//   document.write(`<option>${phoneManufacturers[i]}</option>`);
// }

// document.write('</select>');




// Chapter 15 (Array 1)

// // Q1
// const emptyArray = [];

// // Q2. 
// const stringArray = ["hello"];

// // Q3
// const alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]);

// // Q4
// const alphabet2 = ["h", "i", "j", "k", "", "m", "n", "o"];
// alert(alphabet2.length);

// // Q5
// const singleElementArray = ["first"];
// singleElementArray.splice(1, 0, "second");
// alert(singleElementArray[1]);

// // Chapter 16 (Array 2)

// // Q1
// const stringArray2 = ["one"];
// stringArray2.push("two");
// alert(stringArray2[1]);

// //Q2
// const Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop();

// // Q3
// Alphabet.push(10);

// // Chapter 16 (Array 3)

// // Q1
// const sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();

// // Q2
//  sizes.unshift(1, 2, 3);

// // Q3. 
// const singleElementArray2 = ["last"];
// singleElementArray2.unshift("first");
// alert(singleElementArray2[0]);

// Q4
// const sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// console.log(sizes);

// Q5
// const regSizes = sizes.slice(0, 3);
// console.log(regSizes);

// Q6
// const pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "hamster", "rabbit");
// console.log(pets);

// Q7
// pets.splice(1, 2);
// console.log(pets);

// Q8
// const reducedPets = pets.slice(2, 4);
// console.log(reducedPets);