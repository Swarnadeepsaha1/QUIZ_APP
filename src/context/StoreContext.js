"use client";
import React from "react";
import quizData from "@/utilities/DataSource";


export const QUESTION_PER_PAGE = 5;

const StoreContext = React.createContext({
    examData: quizData,
    saveAnswer: (qnsId, ansId) => {},
    examAns: []
});

export default StoreContext;
