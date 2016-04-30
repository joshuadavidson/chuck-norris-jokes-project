//Global variable for current joke.
var currJoke = "";
//function that pulls a joke and formats it for readability.
function getNewJoke() {
  $.getJSON("http://api.icndb.com/jokes/random?exclude=[explicit]", function(json) {
    currJoke = json.value.joke;
    $("#joke-text").html(json.value.joke);
    $("#joke-number").html(json.value.id)
  });
}

$(document).ready(function() {
  getNewJoke(); //Load a joke when page loads.

  $("#get-joke-btn").mouseup(function() {
    $(this).blur();
  });

  //Open the twitter window as a popup
  $("#tweet-link").click(function(event) {
    event.preventDefault();
    window.open($(this).attr("href"), "tweetWindow", "height=450, width=550, top=" + ($(window).height() / 2 - 275) + ", left=" + ($(window).width() / 2 - 225) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
    return false;
  });

  //Open the facebook window as a popup
  $("#fb-share-link").click(function(event) {
    event.preventDefault();
    window.open($(this).attr("href"), "shareWindow", "height=450, width=550, top=" + ($(window).height() / 2 - 275) + ", left=" + ($(window).width() / 2 - 225) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
    return false;
  });

  //Open the pinterest window as a popup
  $("#pin-link").click(function(event) {
    event.preventDefault();
    window.open($(this).attr("href"), "pinWindow", "height=450, width=550, top=" + ($(window).height() / 2 - 275) + ", left=" + ($(window).width() / 2 - 225) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
    return false;
  });

  $("#get-joke-btn").on("click", getNewJoke); //Load a joke when the button is clicked.

});
