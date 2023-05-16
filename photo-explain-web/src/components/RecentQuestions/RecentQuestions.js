import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../../config";
import { Header } from "../Header/Header";
import { Divider } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RecentQuestions(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_ENDPOINT + "/web-question/recentFive").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  // navigateQuestionPage = (questionText) => {
  //   resonseIndex=axios
  //   .post(API_ENDPOINT + "/question", {

  //     })
  //     .then((response) => {
  //       navigate(`/question/${responseIndex}`);
  //     });
  //   }

  //   }

  return (
    <div>
      <Header history={props.history} />
      <div class="recentQuestionsContainer">
        {data.map((question, index) => (
          <div>
            <div style={{ width: "80vw" }} key={index}>
              {question.questionText && <div>{question.questionText.S}</div>}
              {/* <Link to={`/question/${index}`}>{question.title}</Link> */}
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentQuestions;
