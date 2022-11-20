//Restrict calendar to minimum of today (and also set the default date to today)
window.onload = function () {
  let datePicker = document.getElementById("time-date");
  const today = new Date();
  const dateAsString =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  datePicker.value = dateAsString;
  datePicker.min = dateAsString;
};

function validateForm(identifier) {
  let passed = false;
  switch (identifier) {
    case "bastu":
      passed = validateBastu();
      break;
    case "omkl":
      passed = validateOmkl();
      break;
    case "bana":
      passed = validateBana();
      break;
    default:
      alert("Incorrect form submitted, please contact the site owner.");
      passed = false;
      break;
  }
  if (passed) {
    alert("BOOKED");
  }

  return passed;
}

function validateBastu() {
  return validateTime() && validatePersonalInfo();
}

function validateBana() {
  return validateTime() && validatePersonalInfo();
}

function validateOmkl() {
  return validateTime() && validatePersonalInfo();
}

function validateTime() {
  const bookedDate = $("#time-date").val();
  let dateEntered = new Date(bookedDate);
  dateEntered.setHours(getTime());
  let today = new Date();
  console.log(dateEntered);
  if (today >= dateEntered) {
    alert("Failed with booking - starting time has already passed.");
    return false;
  }
  return true;
}

function validatePersonalInfo() {
  return true;
}

function getTime() {
  let timeSlot = $("#time-slot").val();
  console.log(timeSlot);
  timeSlot = parseInt(timeSlot);
  console.log(timeSlot);
  //Edge cases for our morning / afternoon passes
  if (timeSlot == 7) {
    return 8;
  } else if (timeSlot == 8) {
    return 13;
  }

  // Our starting time is 8 and we have two hour blocks to consider
  //We only allow booking before the time has started to avoid confusion too
  return 8 + (timeSlot - 1) * 2;
}
