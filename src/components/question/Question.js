"use client";

import StoreContext from "@/context/StoreContext";
import { getAnswer } from "@/utilities/Functions";
import { useContext, useEffect, useState } from "react";
import { Header, Segment, List, ListItem, Radio } from "semantic-ui-react";

const Question = (props) => {
  const storeContext = useContext(StoreContext);

  const [question, setQuestion] = useState(props?.question);
  const [answerId, setAnswerId] = useState(null);

  useEffect(() => {
    if (question?.id) {
      setAnswerId(getAnswer(question?.id, storeContext?.examAns));
    }
  }, [question]);

  function handleChange(qnsId, value) {
    setAnswerId(value);
    storeContext?.saveAnswer(qnsId, value);
  }

  return (
    <>
      {question !== null &&
        <Segment padded="very" key={question.id}>
          <Header as='h2'>{question.id}. {question.question}</Header>
          <List>
            {question.options.map((option, optionIndex) => (
              <ListItem key={`question_${question.id}_${optionIndex}`}>
              <Radio name={`question_${question.id}`} value={option} label={option} onChange={(e, { value }) => handleChange(question.id, value)} checked={answerId === option}/>
              {option.value}
              </ListItem>
            ))}
          </List>
        </Segment>
      }
    </>
  );
};

export default Question;