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
   var userEmail = $("#email_1").val(); // get the value of the email inputed
   var foundYou = userEmail.indexOf("@"); //getting the index of where the '@' symbol is
   var getFirstPart = userEmail.slice(0, foundYou); //grabbing the local-part of the email that was inputed using slice
   var inputedPassword = $("#password_1").val(); //grabbing the value of the password inputed.

   if (inputedPassword.indexOf(getFirstPart) > -1) {
      //condition to check if password inputed is the same as the local-part of email
      $(".error-message").text("Email can not be password, please try again");
      $("#password_1").addClass("btn-outline-danger");
   } else {
      function addPadding(num) {
         if (String(num).length < 2) {
            return "0" + num.toString();
         } else {
            return num;
         }
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
      var todaysSec = todaysDate.getSeconds();
      console.log(todaysSec);
      var todaysMilli = todaysDate.getMilliseconds();
      console.log(todaysMilli);
      var allTodaysDate =
         "" + //turns it into a readable string
         addPadding(todaysYear) +
         addPadding(todaysMonth) +
         addPadding(todaysDay) +
         addPadding(todaysHour) +
         addPadding(todaysMin) +
         addPadding(todaysSec);
      console.log(allTodaysDate);

      //create a random number and concatenate with milli seconds var
      var getNumber = Math.floor(Math.random() * 1000);
      console.log(getNumber);
      var idCreated = "" + todaysMilli + getNumber;
      console.log(idCreated);

      var createdId = {
         _id: idCreated,
         email: userEmail,
         password: inputedPassword,
         createdOn: allTodaysDate,
      };

      console.log(createdId);
   }
});

var maxCharacters = 240;

$("#imagery-create").keypress(function () {
   var count = $("#imagery-create").val().length;
   $("#countMe2").text(count + "/" + maxCharacters);
   if (count == 0 || count > maxCharacters) {
      $("#save-imagery").addClass("disabled");
      $("#countMe2").addClass("text-danger");
   } else {
      $("#countMe2").removeClass("text-danger");
      $("#save-imagery").removeClass("disabled");
   }
});

$("#save-imagery").click(function () {
   var userImagery = $("#imagery-create").val(); // get the value of the text inputed

   function addPadding(num) {
      if (String(num).length < 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }

   var todaysDate = new Date();
   console.log("todaysDate", todaysDate);
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
   var todaysSec = todaysDate.getSeconds();
   console.log(todaysSec);
   var todaysMilli = todaysDate.getMilliseconds();
   console.log(todaysMilli);
   var allTodaysDate =
      "" + //turns it into a readable string
      addPadding(todaysYear) +
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   console.log(allTodaysDate);

   //create a random number and concatenate with milli seconds var
   var getNumber = Math.floor(Math.random() * 1000);
   console.log(getNumber);
   var idCreated = "" + todaysMilli + getNumber;
   console.log(idCreated);

   var imageryId = {
      _id: idCreated,
      imagery: userImagery,
      answer:
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
      levelNum: 1,
      successfulAttemptsNum: 0,
      createdOn: allTodaysDate,
      lastAttemptedOn: allTodaysDate, // same as createdOn
   };
   console.log(imageryId);
});
