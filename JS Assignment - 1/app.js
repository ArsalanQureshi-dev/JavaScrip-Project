// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and store the value of 2.5 % in it(hint: 2.5 % means 0.025).Next, create another variable named "userInput" and take the input from the user using the prompt.Make sure the input value is of a type number by converting the input string to a number using a suitable method.Then, create a variable named "result" and assign its value to the multiplication of the zakat percentage and user input.Finally, use an alert message to display the calculated zakat value.The message should look like this: "Your zakat value is xxx".

// var zakatPercentage = 0.025;
// var userInput = +prompt("Please Enter Amount:");
// var result = zakatPercentage * userInput;
// alert("Your Zakat Amount is " + result);

// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family members using the prompt and store the value in a variable called "familyMembers". Next, ask the user to choose a fitrah method by providing them options using the prompt, and store the selected method and its price in variables. Then, use an if-else block to check the user's input and calculate the fitrah amount by multiplying the selected method's price with the number of family members. Finally, display the calculated fitrah amount using an alert message.

// var userFamily = prompt("Please Enter Total Number Of Family Member:");
// var fitrahMethod = prompt(
//   "Please Enter Choose a Fitrah Method: \n1. Wheat Flour ( 320 PKR Per Person ) \n2. Barley ( 480 PKR Per Person ) \n3. Dates ( 2800 PKR Per Person ) \n4. Raisins ( 4800 PKR Per Person )"
// );

// if (fitrahMethod === "1") {
//   fitrahPrice = 320;
// } else if (fitrahMethod === "2") {
//   fitrahPrice = 480;
// } else if (fitrahMethod === "3") {
//   fitrahPrice = 2800;
// } else if (fitrahMethod === "4") {
//   fitrahPrice = 4800;
// }
// var result = fitrahPrice * userFamily;
// alert("The Calculated Fitrah Amount is PKR " + result);

// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it in a variable called "secretNumber". Then, ask the user to enter a guess for the secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If the guess is correct, display a message using an alert saying "Congratulations! You guessed the secret number". Otherwise, if the guess is too high or too low, display an appropriate message informing the user to guess again.

// var userInput = prompt("Please Enter your Guess The Number Form 1 to 10")
// if (userInput == 5){
//   alert ("Congratulations!")
//   }
//   else if (userInput <= 5) {
//       alert ('You Have Lower Selected Number. Please Try Again')
//   }
//   else if (userInput >= 5) {
//     alert ('You Have Higher Selected Number. Please Try Again')
//   }

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name with the first letter capitalized (Make your name in capitalized case).

// var inputuser = prompt("Please Enter Your Name:");
// alert( 'Your Name Fist Latter Capitali And All Small Latter: ' + inputuser[0].toUpperCase() + inputuser.toLowerCase() .slice(1))

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and "contactNames". Using the prompt, you will ask the user to enter a contact number and contact name. You will then push these values into their respective arrays using the push method. After adding all the contacts, you will display the contact numbers and names in the console. To do this, you will need to use a for loop to iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

// const contactNumbers = [];
// const contactNames = [];
// for (var i = 0; i < 3; i++) {
//   const contactName = prompt("Enter Contact Name:");
//   const contactNumber = prompt("Enter Contact Number:");
//   contactNumbers.push(contactNumber);
//   contactNames.push(contactName);
// }
// console.log("Contact Names:");
// for (let i = 0; i < contactNames.length; i++) {
//   console.log(contactNames[i]);
// }
// console.log("Contact Numbers:");
// for (let i = 0; i < contactNumbers.length; i++) {
//   console.log(contactNumbers[i]);
// }

// Task 6:
// Create an Array that contains different products, and get input from the user in which you ask your user to give the position of that element he/she wants.
//  Now remove that Item from your array and console the removed item, Also display the remaining items in the array and total number of items remaining.

// var products = [
//   " Windows Laptop ",
//   " Windows Computer ",
//   " Android Laptop ",
//   " MacBook Laptop ",
//   " Mac Pro ",
//   " iPad ",
// ];
// var x = products.splice(prompt("Please Enter The Products : " + products), 1);
// alert(`Products Itim : ${products} ${products.length}`);
// alert(`Remove Item : ${x}`);

// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt function. The program should then use nested if-else statements to determine if the person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is male and over the age of 18, they are eligible to vote. If the person is female and over the age of 18, the program should ask if they are married. If they are married, they are eligible to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible to vote.

// var nationality = prompt('Please Your Nationality ?');
// var gender = prompt("Please Enter your Gender");
// var age = prompt("Please Enter your Age");

// if (nationality.toLowerCase() == 'pakistani' && gender == "male" && age >= 18) {
//     alert('Go to the voting Room')    
// }
// else if (gender === "female" && age >= 18) {
//     var married = prompt("Are you married? (yes or no)");
//     if(married === "yes"){
//         alert("Go to the voting Room");
//     }
//     else {
//         alert("You're not eligible.");    
//     }
// }
// else {
//     alert("You're not eligible")
// }

// Task 8:
// You have an array of that contains the name of  Pakistani Teams Player selected for WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with India, So make an array of final team players (11 Players) that will be playing in tomorrows match from the WorldCupSquad array. 
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have to make a copy of this array)

var Players15 = [' Babar Azam ', ' Fakhar Zaman ', ' Imam-ul-Haq ', ' Haider Ali ', ' Shadab Khan ', ' Mohammad Rizwan ', ' Sarfaraz Ahmed ', ' Shaheen Afridi ', ' Hasan Ali ', ' Haris Rauf ', ' Mohammad Hasnain ', ' Shoaib Malik ', ' Asif Ali ', ' Mohammad Nawaz ', ' Usman Qadir '];
var Players11 = Players15.slice(1,12)
alert("Pakistani team : " + Players15)
alert("Pakistani Teams Player selected for WorldCup : " + Players11)