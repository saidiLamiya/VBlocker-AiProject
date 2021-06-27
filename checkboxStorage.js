/* checkboxStorage.js
 *
 * POPUP SCRIPT
 *
 * This is storing checkbox values in LOCALSTORAGE (not chromestorage!)
 * However, popup.js could NOT tally checkbox values without this working.
 */

console.log("CHECKBOXES ARE PERSISTANT NOW!");

//logging whats in local storage
for (var i = 0; i < localStorage.length; i++){
  console.log("In checkbox storage:" + localStorage.getItem(localStorage.key(i)))
}

$(document).ready(function() {
  $(function () {
      var data = localStorage.getItem("breakingBad");

      if (data !== null) {
          $("input[id='breakingBad']").attr("checked", "checked");
      }
  });

  $("input[id='breakingBad']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("breakingBad", $(this).val());
      } else {
          localStorage.removeItem("breakingBad");
      }
    });

  $(function () {
      var data = localStorage.getItem("madMen");

      if (data !== null) {
          $("input[id='madMen']").attr("checked", "checked");
      }
  });

  $("input[id='madMen']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("madMen", $(this).val());
      } else {
          localStorage.removeItem("madMen");
      }
    });

  $(function () {
      var data = localStorage.getItem("gameOfThrones");

      if (data !== null) {
          $("input[id='gameOfThrones']").attr("checked", "checked");
      }
  });

  $("input[id='gameOfThrones']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("gameOfThrones", $(this).val());
      } else {
          localStorage.removeItem("gameOfThrones");
      }
    });

   $(function () {
      var data = localStorage.getItem("goodWife");

      if (data !== null) {
          $("input[id='goodWife']").attr("checked", "checked");
      }
  });

  $("input[id='goodWife']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("goodWife", $(this).val());
      } else {
          localStorage.removeItem("goodWife");
      }
    });

  $(function () {
      var data = localStorage.getItem("scandal");

      if (data !== null) {
          $("input[id='scandal']").attr("checked", "checked");
      }
  });

  $("input[id='scandal']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("scandal", $(this).val());
      } else {
          localStorage.removeItem("scandal");
      }
    });

    $(function () {
      var data = localStorage.getItem("trueBlood");

      if (data !== null) {
          $("input[id='trueBlood']").attr("checked", "checked");
      }
  });

  $("input[id='trueBlood']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("trueBlood", $(this).val());
      } else {
          localStorage.removeItem("trueBlood");
      }
    });

  $(function () {
      var data = localStorage.getItem("drWho");

      if (data !== null) {
          $("input[id='drWho']").attr("checked", "checked");
      }
  });

  $("input[id='drWho']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("drWho", $(this).val());
      } else {
          localStorage.removeItem("drWho");
      }
    });

  $(function () {
      var data = localStorage.getItem("yankees");

      if (data !== null) {
          $("input[id='yankees']").attr("checked", "checked");
      }
  });

  $("input[id='yankees']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("yankees", $(this).val());
      } else {
          localStorage.removeItem("yankees");
      }
    });

  $(function () {
      var data = localStorage.getItem("redSox");

      if (data !== null) {
          $("input[id='redSox']").attr("checked", "checked");
      }
  });

  $("input[id='redSox']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("redSox", $(this).val());
      } else {
          localStorage.removeItem("redSox");
      }
    });

   $(function () {
      var data = localStorage.getItem("dancingWithTheStars");

      if (data !== null) {
          $("input[id='dancingWithTheStars']").attr("checked", "checked");
      }
  });

  $("input[id='dancingWithTheStars']").click(function () {

      if ($(this).is(":checked")) {
          localStorage.setItem("dancingWithTheStars", $(this).val());
      } else {
          localStorage.removeItem("dancingWithTheStars");
      }
    });dancingWithTheStars

});





