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
var newCharacters = 0;

$("#text1").keypress(function () {
   var counter = $("#text1").val().length;
   var removedCharacters = newCharacters + counter;
   $("#countMe").text(removedCharacters + " /240");
   if (counter == 0 || counter > 240) {
      $("#nextAnswer").addClass("disabled");
      $("#countMe").addClass("text-danger");
   } else {
      $("#countMe").removeClass("text-danger");
      $("#nextAnswer").removeClass("disabled");
   }
});
