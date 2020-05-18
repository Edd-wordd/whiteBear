// toggles sign in form on the landing page
$(".car").click(function () {
   $("#upBar").toggleClass("d-none");
});
// removes sign up botton after login
$(".car").click(function () {
   $(".car").addClass("d-none");
});
// toggles the success alert
$("#save-imagery").click(function () {
   $("#success-banner").toggleClass("d-flex d-none");
});

$("#backToAnswer").click(function () {
   $("#error-banner").toggleClass("d-flex d-none");
});
// toggles the delete button
$("#customCheck1").click(function () {
   $("#delete-card").toggleClass("d-none");
});

// index.html
// checks to see if there only characters in the email input field when lets go button is clicked on sign up card
$("#letsGoIndex").click(function () {
   var checkEmail1 = $("#email_1").val().length;

   if (checkEmail1 == 0) {
      $("#email_1").addClass("is-invalid");
   }
});
// // checks to see if password is input field is empty on sign up card
$("#letsGoIndex").click(function () {
   var checkPass1 = $("#password_1").val().length;

   if (checkPass1 == 0) {
      $("#password_1").addClass("is-invalid");
   }
});
// checks to see if password is at least 9 characters long on sign up card
$("#letsGoIndex").click(function () {
   var checkPass1 = $("#password_1").val().length;

   if (checkPass1 <= 8) {
      $("#password_1").addClass("passwordTooShort");
   }
});

// // checks to see if there only characters in the email input field when sign in button is clicked on login card
$("#loginPage").click(function () {
   var checkEmail2 = $("#email_2").val().length;

   if (checkEmail2 == 0) {
      $("#email_2").addClass("is-invalid");
      return false;
   } else {
      return true;
   }
});
// // checks to see if there only characters in the password input field sign in button is clicked on login card
$("#loginPage").click(function () {
   var checkPass2 = $("#password_2").val().length;

   if (checkPass2 == 0) {
      $("#password_2").addClass("is-invalid");
      return false;
   } else {
      return true;
   }
});

// // checks to see if there only characters in the email input field when sign in button is clicked on login card
$("#loginPage").click(function () {
   var checkPass2 = $("#password_2").val().length;

   if (checkPass2 <= 8) {
      $("#password_2").addClass("is-invalid");
      return false;
   } else {
      return true;
   }
});

// count the characters on the bottom of the cards
var maxCharacters = 240;

$("#text1").keypress(function () {
   var count = $("#text1").val().length;
   $("#countMe").text(count + "/" + maxCharacters);
   if (count == 0 || count > maxCharacters) {
      $("#nextAnswer").addClass("disabled");
      $("#countMe").addClass("text-danger");
   } else {
      $("#countMe").removeClass("text-danger");
      $("#nextAnswer").removeClass("disabled");
   }
});

// The password cannot contain the local-part of the email address the user entered.

$("#letsGoIndex").click(function () {
   //user clicks the lets go button
   var userEmail = $("#email_1").val(); // get the value of the email inputed
   var foundYou = userEmail.indexOf("@"); //getting the index of where the '@' symbol is
   var getFirstPart = userEmail.slice(0, foundYou); //grabbing the local-part of the email that was inputed using slice
   var inputedPassword = $("#password_1").val(); //grabbing the value of the password inputed.

   if (inputedPassword.indexOf(getFirstPart) > -1) {
      //condition to check if password inputed is the same as the local-part of email
      $(".error-message").text("Email can not be password, please try again");
      $("#password_1").addClass("btn-outline-danger");
      // return alert("error message");
   }
   var todaysDate = new Date();
   console.log(todaysDate);
   //grabbing each part of the date from the date object using dot notation
   var todaysYear = todaysDate.getYear() - 100;
   console.log(todaysYear);

   var todaysMonth = todaysDate.getMonth() + 1; //needs to add one because it is zero indexed
   console.log(todaysMonth);
   var todaysDay = todaysDate.getDate();
   console.log(todaysDay);
   var todaysHour = todaysDate.getHours();
   console.log(todaysHour);
   var todaysMin = todaysDate.getMinutes();
   console.log(todaysMin);

   function addPadding(num) {
      if (num.length < 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }

   var todaysSec = todaysDate.getSeconds();
   console.log(todaysSec);
   var todaysMilli = todaysDate.getMilliseconds();
   console.log(todaysMilli);
   var allTodaysDate =
      "" + //turns it into a readable string
      todaysYear +
      addPadding(todaysMonth) +
      todaysDay +
      addPadding(todaysHour) +
      todaysMin +
      todaysSec;
   console.log(allTodaysDate);

   //create a random number and concatenate with milli seconds var
   var getNumber = Math.floor(Math.random() * 1000);
   console.log(getNumber);
   var idCreated = "" + todaysMilli + getNumber;
   console.log(idCreated);

   // condition to check if password and email are validated and console.log id
   // if (inputedPassword.indexOf(getFirstPart) > -1 && inputedPassword >= 9) {
   //edit creatId object property values using dot notation

   var createdId = {
      _id: idCreated,
      email: userEmail,
      password: inputedPassword,
      createdOn: allTodaysDate,
   };

   console.log(createdId);
   // }
});
// create an object when lets go button is clicked
// $("#letsGoIndex").click(function () {

// make variables to get sections of the date

// });

// create a function to make unique ID
// var to get the current time/date, use date(), date.now()
// var to remove the milliseconds using slice?
// create a random number, use Math.floor and Math.random, number has to be betweem 000-999(1000)
// if statement to check the random number legnth, .legnth
// if to small add numbers to the left of it.
