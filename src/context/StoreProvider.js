"use client";
import React, { useEffect, useState } from "react";
import StoreContext from "./StoreContext";

const StoreProvider = (props) => {
    const [examData, setExamData] = useState(props.examData);
    const [examAns, setExamAns] = useState([]);

    const saveAnswer = (qnsId, ansId) => {
        let allAns = examAns;
        let ansIndex = allAns.findIndex(obj => obj.qnsId == qnsId);
        if (ansIndex !== -1) {
            allAns[ansIndex].ansId = ansId;
        } else {
            allAns = [
                ...allAns,
                {
                    qnsId,
                    ansId
                }
            ];
        }
        setExamAns(allAns);
    }

    const storeContext = {
        examData,
        saveAnswer,
        examAns
    };

    return (
        <StoreContext.Provider value={storeContext}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;