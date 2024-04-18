"use client";
import { useState, useEffect, useContext } from "react";
import { Tab, Container } from "semantic-ui-react";
import NavBar from "../NavBar";
import QuestionTab from "./QuestionTab";
import StoreContext, { QUESTION_PER_PAGE } from "@/context/StoreContext";
import Logout from "../Logout";

function QuestionContainer() 
{
  const storeContext = useContext(StoreContext);
  const [panes, setPanes] = useState([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [questionBook, setQuestionBook] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) { // Check login status
      router.push("/"); // Client-side redirect using useRouter
    }
  }, []);

  useEffect(() => {
    const questionBook = [];
    storeContext?.examData?.forEach((qns) => 
    {
      let chapterIndex = questionBook.findIndex(
        (chapter) => qns.type === chapter.title
      );
      if (chapterIndex === -1) 
      {
        questionBook.push({
          title: qns?.type,
          currentPageIndex: 0,
          totalPage: 1,
          questions: [[qns]],
        });
      }
      else
      {
        //This condition checks if the number of questions in the last page (section) of the current chapter is less than QUESTION_PER_PAGE. If there's still space for more questions on the current page, it executes the first block of code.
        if (questionBook[chapterIndex].questions[questionBook[chapterIndex].questions.length - 1].length < QUESTION_PER_PAGE) 
        {
          questionBook[chapterIndex].questions[questionBook[chapterIndex].questions.length - 1].push(qns);
        } 
      /*  If the current page is full, we need to start a new page for the questions.
        * Increment totalPage count for the current chapter.
        * Push a new array containing the new question qns into the questions array of the current chapter. This new array represents the first page of the next set of questions in the chapter.*/  
        else 
        {
          questionBook[chapterIndex].totalPage += 1;
          questionBook[chapterIndex].questions.push([qns]);
        }
      }
    });

  setQuestionBook(questionBook);
  }, [storeContext.examData]);

  useEffect(() => 
  {
    configurePanes();
  }, [questionBook]);

  const handleOnNext = (chapterIndex, currentPageIndex, totalPage) => {
    console.log(chapterIndex, currentPageIndex, totalPage, questionBook);
    const newBook = [...questionBook];
    if (
      currentPageIndex === totalPage - 1 &&
      chapterIndex === questionBook.length - 1
    )
    {
      console.log("END reached");
    } 
    else if (currentPageIndex === totalPage - 1) 
    {
      newBook[chapterIndex + 1].currentPageIndex = 0;
      setQuestionBook(newBook);
      setCurrentTabIndex((val) => val + 1);
    } 
    else 
    {
      newBook[chapterIndex].currentPageIndex += 1;
      setQuestionBook(newBook);
    }
  };

  const handleOnPrevious = (chapterIndex, currentPageIndex, totalPage) => {
    console.log(chapterIndex, currentPageIndex, totalPage, questionBook);
    const newBook = [...questionBook];
    if (currentPageIndex === 0 && chapterIndex === 0)
    {
      console.log("Start reached");
    } 
    else if (currentPageIndex === 0) 
    {
      newBook[chapterIndex - 1].currentPageIndex =
        newBook[chapterIndex - 1].totalPage - 1;
      setQuestionBook(newBook);
      setCurrentTabIndex((val) => val - 1);
    } 
    else 
    {
      newBook[chapterIndex].currentPageIndex -= 1;
      setQuestionBook(newBook);
    }
  };

  const handleOnSubmit = () => {
    console.log("On Submit");
  };

  const configurePanes = () => 
  {
    const panes = [];
    questionBook.forEach((chapter, index) => {
      panes.push({
        menuItem: chapter.title,
        render: () => (
          <QuestionTab
            questions={chapter.questions[chapter.currentPageIndex]}
            onNext={chapter.currentPageIndex === chapter.totalPage - 1 && index === questionBook.length - 1? null: () =>
                    handleOnNext(
                      index,
                      chapter.currentPageIndex,
                      chapter.totalPage
                    )
                  }
            onPrevious={chapter.currentPageIndex === 0 && index === 0 ? null: () =>
                    handleOnPrevious(
                      index,
                      chapter.currentPageIndex,
                      chapter.totalPage
                    )
                   }
            onSubmit={chapter.currentPageIndex === chapter.totalPage - 1 && index === questionBook.length - 1? 
            handleOnSubmit
                : null
            }
          />
        ),
      });
    });

    setPanes([...panes]);
  };

  const handleTabChange = (e, { activeIndex }) => {
    setCurrentTabIndex(activeIndex);
  };

  
  

  return (
    <>
      {/* <NavBar /> */}
      {/* <Logout  /> */}
      <Container className="main-container">
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          activeIndex={currentTabIndex}
          onTabChange={handleTabChange}
        />
      </Container>
    </>
  );
}

export default QuestionContainer;
