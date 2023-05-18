import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../../config";
import { Header } from "../Header/Header";
import axios from "axios";
import "./QuestionPage.css";
import { Divider } from "@chakra-ui/react";

function QuestionPage(props) {
  const { questionID } = useParams();
  console.log(questionID);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(API_ENDPOINT + "/web-question/" + questionID).then((response) => {
      setData(response.data);
      setQuestion(response.data.questionText);
      setAnswer(response.data.answerText);
    });
  }, []);

  return (
    <div>
      <Header history={props.history} />
      <div class="questionsPageContainer">
        <div class="questionFont">Question: {question}</div>
        <Divider />
        <div class="recentQuestionsFont">{answer}</div>
      </div>
    </div>
  );
}

export default QuestionPage;