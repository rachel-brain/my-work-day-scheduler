// Live Day/Date/Time tracker:
function update() {
  $('#currentDay').html (moment().format('dddd MMMM Do, YYYY [at] hh:mm:ss a'));
}

setInterval(update, 1000);


// Function to handle form submission & prevent the default behavior:
function handleFormSubmit(event) {
  event.preventDefault();
}

handleFormSubmit();

// Still to complete the following code:
// 1. The text for the event is saved in local storage when I click the save button for that timeblock.
// 2. The form does not clear the inputted hourly tasks on refresh; ie. they persist.
// 3. The tasks are color-coded based on the time of day for past (grey), present (pink) & future (green) times.
// 4. The save button fades on hover.

// Set variables for timeblocks:
var taskFormEl = $('#form');
var taskEl = $('#task-list');
var taskInput = document.querySelector('#task-input');
var saveBtns = document.querySelectorAll('.saveBtn');

// Set local storage for task/event inputs:
var task = localStorage.getItem('custom-taskbar');
var taskInput = localStorage.getItem('task-input');

function SavetoLocalStorage(event){
  console.log(event.target.parentElement.children[1].value);
  var textValue = event.target.parentElement.children[1].value;
  var timeValue = event.target.parentElement.children[0].textContent;

  var exitingSchedulers = JSON.parse(localStorage.getItem("schedulerDetails"));
    exitingSchedulers.push({"time": timeValue, "task": textValue});
    localStorage.setItem("schedulerDetails", JSON.stringify(exitingSchedulers) )
}

// Code for checking time of inputs versus now & color-code:
const rows = document.getElementsByClassName('time-block');
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    if (currentHour === rowHour) {
      setColor(row, '#ff6961');
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, '#77dd77');
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, '#d3d3d3');
    } else {
      setColor(row, '#FFFFFF');
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

saveBtns.forEach(function(element){
  element.addEventListener('click', SavetoLocalStorage)
});

taskFormEl.on('submit', handleFormSubmit);


// ALTERNATIVE code for checking time of inputs versus now & color-code:
// var scheduleTime = document.querySelector('.custom-time');

// function setBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }

// function colorDisplay () {
//   if (scheduleTime === moment().format('hh')) {
//   setBackgroundColor(taskInput, '#ff6961')
//   }

//   else if (scheduleTime < moment().format('hh')) {
//   setBackgroundColor(taskInput, '#d3d3d3')
//   }

//   else {
//   setBackgroundColor(taskInput, '#77dd77')
//   }
// }

// colorDisplay();