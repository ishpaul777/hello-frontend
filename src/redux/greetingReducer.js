const GET_GREETING = "GET_GREETING";

export function getGreeting(dispatch) {
  return async (dispatch) => {
    const response = await fetch(
      "/api/v1/greetings/random",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => data);

		const greeting = response.data.greeting;
    dispatch({ type: GET_GREETING, payload: greeting });
  };
}

export default function greetingReducer(state = {}, action) {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
}
// how to fetch data from an rails API on 3000 and display it on 3001 using React and Redux
// step 1: create function to fetch data from rails API
// function getGreeting() {
// 	return fetch('http://localhost:3000/api/v1/greetings/random')
// 		.then((response) => response.json())
// 		.then((data) => data);
// }
