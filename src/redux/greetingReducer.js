const GET_GREETING = 'GET_GREETING';

export function getGreeting() {
  return async (dispatch) => {
    const response = await fetch(
      '/api/v1/greetings/random',
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => data);

    const { greeting } = response.data;
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
