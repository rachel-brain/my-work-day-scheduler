// Live Day/Date/Time tracker:
function update() {
  $('#currentDay').html (moment().format('dddd MMMM Do, YYYY [at] hh:mm:ss a'));
}

setInterval(update, 1000);



// Still to complete the following code:
// 1. I can enter an event/task when I click into a timeblock.
// 2. The text for that event is saved in local storage when I click the save button for that timeblock.
// 3. The form does not clear the inputted hourly tasks on refresh; ie. they persist.
// 4. The tasks are color-coded based on the time of day for past (grey), present (pink) & future (green) times.
// 5. The save button fades on hover. 



// Set variables for timeblocks:
var taskFormEl = $('#form');
var taskEl = $('#task-list');
var taskInput = document.querySelector('#task-input');
var saveBtn = document.querySelector('.saveBtn');
var task = localStorage.getItem('custom-taskbar');
var scheduleTime = document.querySelector('.custom-time');
var currentTime = document.querySelector('.today');
var setBackgroundColor;

taskInput.textContent = task;

saveBtn.addEventListener('click', function(event) {
  event.preventDefault();
//   if (!taskInput) {
//     return;
//   } else 
//   localStorage.setItem('hour-task', task);
});


// TAKE 1:
// function colorDisplay () {
//   if (scheduleTime === update.format ('hh')) {
//   setBackgroundColor(row, "#ff6961")
//   }

//   else if (scheduleTime < update.format ('hh')) {
//   setBackgroundColor(row, "#d3d3d3")
//   }

//   else {
//   setBackgroundColor(row, "#77dd77")
//   }
// }

// colorDisplay();

// function setBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }


// TAKE 2:
// function colorDisplay () {
//   if (scheduleTime === (moment().format ('hh'))
//   setBackgroundColor(row, '#ff6961')
//   }

//   else if (scheduleTime < (moment().format ('hh'))
//   setBackgroundColor(row, '#d3d3d3')
//   }

//   else {
//   setBackgroundColor(row, '#77dd77')
//   }
// }

// colorDisplay();

// function setBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }




// ..............................................
// TRY ALL OF THIS CODE BELOW?
// const rows = document.getElementsByClassName('time-block');
// let currentHour = parseInt(moment().format('H'));

// Array.from(rows).forEach(row => {
//   let
//     rowIdString = row.id,
//     rowHour;
//   if (rowIdString) {
//     rowHour = parseInt(rowIdString);
//   }
//   if (rowHour) {
// //     // Compares row id to current hour and sets color accordingly
//     if (currentHour === rowHour) {
//       setColor(row, "red");
//     } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//       setColor(row, "green");
//     } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//       setColor(row, "lightgrey");
//     } else {
//       setColor(row, "white");
//     }
//   }
// });

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }
// ..............................................

// // create function to handle form submission
// function handleTaskSubmit(event) {
//   event.preventDefault();

// Select form element by its `name` attribute and get its value
  // var taskDescription = $('input[name='hour-task']').val();
  // }


//   // clear the form input element
//   $('input[name="hour-task"]').val('');
// }

// // Create a submit event listener on the form element
// taskFormEl.on('submit', handleTaskSubmit);


// renderLastScheduled();

// function renderLastScheduled() {
//     var taskInput = localStorage.setItem('task-input', '');
//     if (!taskInput) {
//       return;
//     }

//     taskInputSpan.textContent = task;
//   }

// window.localStorage.setItem('task-input', '');
// window.localStorage.getItem('task-input');



// TEST:
localStorage.setItem('test', 1);
alert(localStorage.getItem('test'));


// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. 
// Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.