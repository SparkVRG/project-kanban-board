import React from 'react';
import './KanbanBoardHeader.css';
import KanbanBoardTitle from './KanbanBoardTitle';
import KanbanBoardProfile from './KanbanBoardProfile';

function KanbanBoardHeader() {
    return (
        <header className='header'>
            <KanbanBoardTitle />
            <KanbanBoardProfile />
        </header>
    );
}

export default KanbanBoardHeader;