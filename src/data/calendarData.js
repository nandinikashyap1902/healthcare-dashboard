export const calendarData = {
  month: "October 2021",
  days: [
    { day: "Mon", date: 25 },
    { day: "Tue", date: 26 },
    { day: "Wed", date: 27 },
    { day: "Thu", date: 28 },
    { day: "Fri", date: 29 },
    { day: "Sat", date: 30 },
    { day: "Sun", date: 31 }
  ],
  timeSlots: [
    { time: "09:00", appointments: [26, 27, 28, 29, 30] },
    { time: "11:00", appointments: [25, 27, 29, 31] },
    { time: "13:00", appointments: [26, 28, 30] },
    { time: "15:00", appointments: [25, 27, 29, 31] },
    { time: "17:00", appointments: [26, 28, 30] }
  ],
  highlightedDays: [25, 28, 30]
};

export const activityData = {
  summary: "3 appointments on this week",
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  data: [
    [1, 3, 2, 1, 0, 0, 0],
    [2, 1, 0, 3, 1, 2, 0],
    [0, 0, 1, 2, 3, 1, 0],
    [1, 2, 3, 0, 0, 1, 2]
  ]
};

export const detailedAppointments = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cassidy Will',
    note: 'All Learning',
    icon: 'tooth'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Spacey',
    icon: 'activity'
  }
];
