import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });


  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(response => {
        setState({ ...state, appointments, days: updateSpots(id, appointments) });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
      .then(response => {
        setState({ ...state, appointments, days: updateSpots(id, appointments) });
      });
  }

  const updateSpots = (appointmentId, appointments) => {
    let day = null;
    for (let i = 0; i < state.days.length; i++) {
      if (state.days[i].appointments.includes(appointmentId)) {
        day = state.days[i];
        break;
      }
    }

    let spots = 0;
    for (let i = 0; i < day.appointments.length; i++) {
      const appointment = appointments[day.appointments[i]];
      if (appointment.interview === null) {
        spots++;
      }
    }

    return state.days.map((day) => {
      if (day.appointments.includes(appointmentId)) {
        return { ...day, spots: spots };
      }
      return day;
    });
  };

  return { state, setDay, bookInterview, cancelInterview };
}