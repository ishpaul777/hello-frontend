import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "../redux/greetingReducer";

function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getGreeting());
  }, []);

  function handleClick() {
    dispatch(getGreeting());
  }

  return (
    <>
      <h1>{greeting.message}</h1>
			<i>- {greeting.language}</i>
      <button onClick={handleClick}>Get Greeting</button>
    </>
  );
}

export default Greeting;
