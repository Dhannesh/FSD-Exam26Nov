import { Link, useLocation, useNavigate } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const { totalMarks } = location.state;
  return (
    <div className="result">
      {totalMarks > 25 ? (
        <div className="card2">
          <h1>Congratulation! your score is {totalMarks}</h1>
        </div>
      ) : (
        <div className="card1">
          <h1>Oops! Your Score is {totalMarks}</h1>
        </div>
      )}
    </div>
  );
};
export default Result;
