import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../config";
import { Header } from "./Header/Header";
import axios from "axios";

function QuestionPage(props) {
  const { questionID } = useParams();
  console.log(questionID);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(API_ENDPOINT + "/web-question/" + questionID).then((response) => {
      console.log(response.data);
      setData(response.data);
      setQuestion(response.data.questionText);
      setAnswer(response.data.answerText);
    });
  }, []);

  return (
    <div>
      <Header history={props.history} />
      <h2>Question {questionID}ffff</h2>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
}

export default QuestionPage;
