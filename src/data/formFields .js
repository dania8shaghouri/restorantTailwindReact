import { IoPersonOutline, IoCalendarClearOutline } from "react-icons/io5";
export const formFields = [
  {
    type: "text",
    placeholder: "Your Name",
  },
  {
    type: "tel",
    placeholder: "Phone Number",
  },
];

export const selects = [
  {
    icon: IoPersonOutline,
    options: [
      "1 Person",
      "2 Person",
      "3 Person",
      "4 Person",
      "5 Person",
      "6 Person",
      "7 Person",
    ],
  },
];

export const datetimeInput = {
  icon: IoCalendarClearOutline,
  type: "datetime-local",
};
