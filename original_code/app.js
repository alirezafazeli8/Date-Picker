import {
  format,
  getUnixTime,
  fromUnixTime,
  addMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfWeek,
  eachDayOfInterval,
  endOfMonth,
  isSameMonth,
  isSameDay,
} from "date-fns";

const datePickerButton = document.querySelector(".date-picker-button");
const datePicker = document.querySelector(".date-picker");
const dateHeader = document.querySelector(".date-picker-header");
const currentMonth = document.querySelector(".current-month");
const prevMonthButton = document.querySelector(".prev-month-button");
const nextMonthButton = document.querySelector(".next-month-button");
const datePickerGrid = document.querySelector(".date-picker-grid-dates");

//  for current date
let sDateLected;

// format the date picker button
function setDate(date) {
  datePickerButton.innerHTML = format(date, "MMMM do YYY ");
  sDateLected = getUnixTime(date);
}

function setupDateMonth(date) {
  nextMonthButton.addEventListener(
    "click",
    function () {
      setUpDatePicker(addMonths(date, 1));
    },
    { once: true }
  );

  prevMonthButton.addEventListener(
    "click",
    function () {
      setUpDatePicker(addMonths(date, -1));
    },
    { once: true }
  );
}

function dayDatePickerSetup(userDate) {
  const firstWeekStart = startOfWeek(startOfMonth(userDate));
  const lastWeekEnd = endOfWeek(endOfMonth(userDate));

  const startAndEndWeekOBJ = {
    start: firstWeekStart,
    end: lastWeekEnd,
  };

  const allDates = eachDayOfInterval(startAndEndWeekOBJ);

  datePickerGrid.innerHTML = "";

  allDates.forEach((date) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("date");
    buttonElement.innerText = date.getDate();

    if (!isSameMonth(date, userDate)) {
      buttonElement.classList.add("date-picker-other-month-date");
    }

    if (isSameDay(date, userDate)) {
      buttonElement.classList.add("selected");
    }

    datePickerGrid.appendChild(buttonElement);

    buttonElement.addEventListener("click", (e) => {
      setDate(date);
      datePicker.classList.toggle("show");
    });
  });
}

function setUpDatePicker(selectedDate) {
  currentMonth.innerHTML = format(selectedDate, "MMM YYY");

  setupDateMonth(selectedDate);
  dayDatePickerSetup(selectedDate);
}

//
datePickerButton.addEventListener("click", function (e) {
  datePicker.classList.toggle("show");
  setUpDatePicker(fromUnixTime(sDateLected));
});

setDate(new Date());
