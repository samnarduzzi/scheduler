export function getAppointmentsForDay(state, day) {
  const selectDay = state.days.find((days) => days.name === day);

  if (!selectDay || !selectDay.appointments) {
    return [];
  }

  const selectAppointment = selectDay.appointments.map(
    (appt) => state.appointments[appt]
  );

  return selectAppointment;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  return {
    ...interview,
    interviewer: interviewer
  };
}
