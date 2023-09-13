import React from 'react';
import './KanbanBoardCreator.css';

function KanbanBoardCreator({name, year}) {
    return (
        <div className='creator'>
            <span className='creator__item'>Kanban board by {name}, {year}</span>
        </div>
    );
}

export default KanbanBoardCreator;