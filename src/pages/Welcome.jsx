import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Welcome = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (name) {
      navigate("/quiz", { state: { name } });
    } else {
      alert("please enter name");
    }
  };
  return (
    <>
      <div className="welcome">
        <h1>ABES Quiz Platform</h1>
        <label htmlFor="">Contestant Name:</label>
        <input
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Start Quiz</button>
      </div>
    </>
  );
};
export default Welcome;
