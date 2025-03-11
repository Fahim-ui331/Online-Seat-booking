var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
/*
var t_dd = String(tomorrow.getDate()).padStart(2, "0");
var t_mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
var t_yyyy = tomorrow.getFullYear();
*/

var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
var y_dd = String(yesterday.getDate()).padStart(2, "0");
var y_mm = String(yesterday.getMonth() + 1).padStart(2, "0");
var y_yyyy = yesterday.getFullYear();

var YM = yyyy + "-" + mm;
var YESTERDAY = y_yyyy + "-" + y_mm + "-" + y_dd;
var TODAY = yyyy + "-" + mm + "-" + dd;

var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const returnDate = (date) => {
  if (date !== undefined) {
    const dateSection = date.split("-");
    let newDate = dateSection[2] + " " + month[Number(dateSection[1]) - 1] + " " + dateSection[0];
    return newDate;
  }
};

export const events = [
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "2 CHAIRS AVAIlABLE ",
    start: YM + "-03",
    end: YM + "-03",
    className: "fc-event-danger",
    type: { value: "fc-event-danger", label: "Business dinners" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: "default-event-id-" + Math.floor(Math.random() * 9999999),
    title: "4 CHAIRS AVAIlABLE ",
    start: YM + "-14",
    end: YM + "-14",
    className: "fc-event-success",
    type: { value: "fc-event-success", label: "Seminars" },
    description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
];

export const eventOptions = [
  { value: "fc-event-primary", label: "Premium" },
  { value: "fc-event-success", label: "General" },
  { value: "fc-event-info", label: "Meeting" },
];
