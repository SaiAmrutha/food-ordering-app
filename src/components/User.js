import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  useEffect = () => {
    // api calls
  };
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Chennai</h3>
      <h4>Contact: @amrutha.com</h4>
    </div>
  );
};

export default User;
