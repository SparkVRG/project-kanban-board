import React, { useState } from 'react';
import KanbanBoardHeader from './header/KanbanBoardHeader';
import KanbanBoardMain from './main/KanbanBoardMain';
import KanbanBoardFooter from './footer/KanbanBoardFooter';

function KanbanBoard() {
    let activeTasksCountData, finishedTasksCountData;

    if (localStorage.getItem('activeTasksCountData') || localStorage.getItem('finishedTasksCountData')) {
        activeTasksCountData = JSON.parse(localStorage.getItem('activeTasksCountData'));
        finishedTasksCountData = JSON.parse(localStorage.getItem('finishedTasksCountData'));
    } else {
        activeTasksCountData = 0;
        finishedTasksCountData = 0;
    }

    let [activeTasksCount, setActiveTasksCount] = useState(activeTasksCountData);
    let [finishedTasksCount, setFinishedTasksCount] = useState(finishedTasksCountData);

    return (
        <>
            <KanbanBoardHeader />
            <KanbanBoardMain setActiveTasksCount={setActiveTasksCount} setFinishedTasksCount={setFinishedTasksCount}/>
            <KanbanBoardFooter activeTasksCount={activeTasksCount} finishedTasksCount={finishedTasksCount}/>
        </>
    );
}

export default KanbanBoard;