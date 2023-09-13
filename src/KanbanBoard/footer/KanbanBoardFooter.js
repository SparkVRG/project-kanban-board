import React from 'react';
import './KanbanBoardFooter.css';
import KanbanBoardTasksCounter from './KanbanBoardTasksCounter';
import KanbanBoardCreator from './KanbanBoardCreator';

function KanbanBoardFooter({activeTasksCount, finishedTasksCount}) {
    return (
        <footer className='footer'>
            <KanbanBoardTasksCounter activeTasksCount={activeTasksCount} finishedTasksCount={finishedTasksCount}/>
            <KanbanBoardCreator name='Victor Rybalchenko (SparkVRG)' year='2023'/>
        </footer>
    );
}

export default KanbanBoardFooter;