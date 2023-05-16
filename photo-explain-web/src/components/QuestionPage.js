import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../config";
import { Header } from "./Header/Header";
import axios from "axios";

function QuestionPage(props) {
  const { id } = useParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(API_ENDPOINT + "/web-question/" + id).then((response) => {
      console.log(response.data);
      setQuestion(response.data.quesionText);
      setAnswer(response.data.answerText);
    });
  }, []);

  useEffect(() => {
    console.log("hello question page");
    async function fetchData() {
      const response = await axios.get(API_ENDPOINT);
      setData(response.data);
      console.log(response.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header history={props.history} />
      <h2>Question {id}ffff</h2>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
}

export default QuestionPage;
