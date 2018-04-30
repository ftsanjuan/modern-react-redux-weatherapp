import { FETCH_WEATHER } from '../actions/index';

// initial value of state is an array because we will be keeping track of an
// array of weather data.
export default function(state = [], action) {
  // Note that because of redux-promise (middleware), an Action sent by an ActionCreator
  // having a 'payload' property which is a Promise will actually get stopped until the
  // promise resolves. Upon response being received (and promise geting resolved),
  // it will dispatch an Action of the same type to reducers, with the payload having the actual
  // response data (a JSON object).

  switch(action.type) {
    case FETCH_WEATHER:
      // add a new city to the existing state of cities, but in Redux
      // YOU MUST NOT MUTATE STATE, instead, create a completely new
      // instance of state.  Below .concat() appends and returns
      // a completely new instance of state.
      // return state.concat([action.payload.data]);
      // alternately, in ES6, we can use the spread operator to accomplish
      // the same as above. It will return [city, city, city]
      return [ action.payload.data, ...state ];
  }

  return state;
}