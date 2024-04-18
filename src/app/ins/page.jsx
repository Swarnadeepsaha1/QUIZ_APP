"use client"
import React,{useState} from 'react'
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'

import ModalItem from './ModalItem';
import NavBar from '@/components/NavBar';

export default function page() {
   const [modal,setModel]=useState(false)
    const examDetails = {
        examTime: 30, // Exam time in minutes
        totalSegments: 2,
        totalQuestionsPerSegment: 30,
        marksPerQuestion: 1,
        negativeMarking: -0.25,
      };
    
 
   return (
     <>
      <NavBar/>
       <div>
      <h1>Exam Instructions</h1>
      <p>Time: {examDetails.examTime} minutes</p>
      <p>Total Segments: {examDetails.totalSegments}</p>
      <p>Total Questions Per Segment: {examDetails.totalQuestionsPerSegment}</p>
      <p>Marks Per Question: {examDetails.marksPerQuestion}</p>
      <p>Negative Marking: {examDetails.negativeMarking}</p>
      <p>
        Please read the instructions carefully before starting the exam. You
        have {examDetails.examTime} minutes to complete the exam. There are{" "}
        {examDetails.totalSegments} segments in the exam, each containing{" "}
        {examDetails.totalQuestionsPerSegment} questions. Each correct answer
        will earn you {examDetails.marksPerQuestion} mark, and each incorrect
        answer will deduct {Math.abs(examDetails.negativeMarking)} mark.
      </p>
    </div>
   


    <ModalItem />


  
     </>
   )
 }