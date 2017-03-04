/* establish global variables for ESLint */
/* global $ window */

import $ from 'jquery';

// import custom styles for project
import './index.scss';

// function that pulls a joke and formats it for readability
function getNewJoke() {
  $.getJSON('https://api.icndb.com/jokes/random?exclude=[explicit]', (json) => {
    $('#joke-text').html(json.value.joke);
    $('#joke-number').html(json.value.id);
  });
}

// Load a joke when page loads
getNewJoke();

// Configuration string for popup window after clicking share button
const windowConfig = `height=450, width=550, top=${(($(window).height() / 2) - 275)}, left=${(($(window).width() / 2) - 225)}, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0`;

$('#get-joke-btn').mouseup(function onMouseup() {
  $(this).blur();
});

// Open the share links window as a popup
$('.icon-link').click(function clickTweet(event) {
  event.preventDefault();
  window.open($(this).attr('href'), 'shareWindow', windowConfig);
});

// Load a joke when the button is clicked.
$('#get-joke-btn').on('click', getNewJoke);
