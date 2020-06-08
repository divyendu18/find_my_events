import axios from "axios";
import {
  GET_EVENTS,
  GET_EVENT,
  ADD_EVENT,
  FIND_EVENT,
  DELETE_EVENT,
} from "./types";

export const getEvents = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3001/events");
  dispatch({
    type: GET_EVENTS,
    payload: res.data,
  });
};

export const getEvent = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:3001/events/${id}`);
  dispatch({
    type: GET_EVENT,
    payload: res.data,
  });
};
export const addEvent = (data) => async (dispatch) => {
  const res = await axios.post(`http://localhost:3001/events`, data);
  dispatch({
    type: ADD_EVENT,
    payload: res.data,
  });
};
export const findEvent = (place) => async (dispatch) => {
  const res = await axios.get("http://localhost:3001/events");
  dispatch({
    type: GET_EVENTS,
    payload: res.data,
  });
  dispatch({
    type: FIND_EVENT,
    payload: place,
  });
};
export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/events/${id}`);
  const res = await axios.get("http://localhost:3001/events");
  dispatch({
    type: DELETE_EVENT,
    payload: res.data,
  });
};
