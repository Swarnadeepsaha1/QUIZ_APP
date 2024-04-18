"use client";

import { SegmentGroup } from "semantic-ui-react";
import Question from "./Question";
import Navigation from "../Navigation/Navigation";

const QuestionTab = ({ questions, onNext, onPrevious, onSubmit }) => {
  return (
    <>
      <SegmentGroup raised>
        {questions.map((qns) => (
          <Question key={qns?.id} question={qns} />
        ))}
      </SegmentGroup>
      <Navigation
        handlePrevious={onPrevious}
        handleNext={onNext}
        handleSubmit={onSubmit}
      />
    </>
  );
};

export default QuestionTab;