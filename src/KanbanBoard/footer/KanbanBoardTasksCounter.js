import React from 'react';
import './KanbanBoardTasksCounter.css';

function KanbanBoardTasksCounter({activeTasksCount, finishedTasksCount}) {
    return (
        <div className='tasks-counter'>
            <span className='tasks-counter__item'>Active tasks: {activeTasksCount}</span>
            <span className='tasks-counter__item'>Finished tasks: {finishedTasksCount}</span>
        </div>
    );
}

export default KanbanBoardTasksCounter;