// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// var now = moment().format("LLLL");


// var now = moment().format("MMM Do, YYYY");
// $("#currentDay").text(now);

var now = moment();
$("#currentDay").text(now.format("MMM Do, YYYY"));


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past (grey), present (pink), or future (green), or beer o'clock! (blue)
    // .custom-taskbar
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
    // save button! click event
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



// What are those icons?!!
// Add a key for the colors?