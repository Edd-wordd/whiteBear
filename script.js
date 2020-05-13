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
// $("#save-imagery").click(function () {
//    $("#success-banner").slideToggle("slow");
// });

$("#backToAnswer").click(function () {
   $("#error-banner").toggleClass("d-flex d-none");
});
// toggles the delete button
$("#customCheck1").click(function () {
   $("#delete-card").toggleClass("d-none");
});

// index.html
$("#letsGoIndex").click(function () {
   $("#email_1").length == 0;
   alert("please enter email address");
   return false;
});
$("#letsGoIndex").click(function () {
   if($("#email_1").length >= 1;)
   // alert("please enter email address");
   return true;
});
