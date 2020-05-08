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
$("#delete-input").click(function () {
   $("#delete-card").toggleClass("d-none");
});

focusMethod = function getFocus() {
   document.getElementById("page1").focus();
};
