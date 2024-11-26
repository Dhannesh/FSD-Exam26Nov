import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { questions } from "../../data";

const Quiz = () => {
  const location = useLocation();
  const [timer, setTimer] = useState(15);
  const [quest, setQues] = useState(questions[0]);
  const [qno, setQno] = useState(1);
  const [marks, setMarks] = useState(5);
  const [ans, setAns] = useState();
  const [totalMarks, setTotalMarks] = useState(0);
  console.log(quest.ques);
  const navigate = useNavigate();

  const { name } = location.state;
  const handleClick = (e) => {
    e.preventDefault();
    setQno((oldqno) => oldqno + 1);
    console.log(qno);
    setMarks((oldmarks) => oldmarks + 5);
    if (ans === quest.ans) {
      setTotalMarks((oldtMarks) => oldtMarks + 5);
    }
    if (qno == 10) {
      navigate("/result", { state: { totalMarks } });
    }
    setQues(questions[qno]);
  };

  //   useEffect(() => {
  //     setQues(questions[qno]);
  //     const timeout1 = setInterval(() => {
  //       setTimer((oldTimer) => oldTimer - 1);
  //     }, 1000);
  //     return () => clearTimeout(timeout1);
  //   }, []);

  useEffect(() => {
    // setQues(questions[qno - 1]);
    console.log(quest);

    const timeout2 = setInterval(() => {
      //   setQues(questions[qno]);
      //   setQues((oldqno) => oldqno + 1);
    }, 15000);
    return () => clearTimeout(timeout2);
  }, [quest]);

  return (
    <>
      <div className="quiz">
        <div className="head">
          <p>
            Contenstant : <span className="cname">{name}</span>
          </p>
          <div className="timer">{timer}</div>
        </div>
        <div className="marks">
          {totalMarks}/{marks}
        </div>
        <div className="card">
          <div className="question">
            <p>{quest.ques}</p>
            <div className="qno">{qno}/10</div>
          </div>
          <div className="answers">
            <button onClick={() => setAns(1)}>{quest.options[0]}</button>
            <button onClick={() => setAns(2)}>{quest.options[1]}</button>
            <button onClick={() => setAns(3)}>{quest.options[2]}</button>
            <button onClick={() => setAns(4)}>{quest.options[3]}</button>
          </div>
          <button className="nextbtn" onClick={handleClick}>
            Next Question
          </button>
        </div>
      </div>
    </>
  );
};
export default Quiz;
