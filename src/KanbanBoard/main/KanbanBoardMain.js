import React, { useState, useEffect } from 'react';
import './KanbanBoardMain.css';
import KanbanBoardFirstSection from './KanbanBoardFirstSection';
import KanbanBoardAnotherSection from './KanbanBoardAnotherSection';
import KanbanBoardTaskInfo from './KanbanBoardTaskInfo';
import { Routes, Route } from 'react-router-dom';

function KanbanBoardMain({setActiveTasksCount, setFinishedTasksCount}) {
    useEffect(() => {
        updateData();
    });

    let data;

    if (localStorage.getItem('data')) {
        data = JSON.parse(localStorage.getItem('data'));
    } else {
        data = [
            {
                title: 'Backlog',
                tasks: []
            },
            {
                title: 'Ready',
                tasks: []
            },
            {
                title: 'In Progress',
                tasks: []
            },
            {
                title: 'Finished',
                tasks: []
            }
        ];
    }

    let [tasksBacklog, setTasksBacklog] = useState(data[0].tasks);
    let [tasksReady, setTasksReady] = useState(data[1].tasks);
    let [tasksInProgress, setTasksInProgress] = useState(data[2].tasks);
    let [tasksFinished, setTasksFinished] = useState(data[3].tasks);

    function updateTasks(tasks, title) {
        switch(title) {
            case 'Backlog':
                setTasksBacklog(tasks);
                setActiveTasksCount(tasks.length);
                break;

            case 'Ready':
                setTasksReady(tasks);
                break;

            case 'In Progress':
                setTasksInProgress(tasks);
                break;

            case 'Finished':
                setTasksFinished(tasks);
                setFinishedTasksCount(tasks.length);
                break;

            default:
                console.log('Unknown section');
        }
    }

    function updateData() {
        let result = [
            {
                title: 'Backlog',
                tasks: tasksBacklog
            },
            {
                title: 'Ready',
                tasks: tasksReady
            },
            {
                title: 'In Progress',
                tasks: tasksInProgress
            },
            {
                title: 'Finished',
                tasks: tasksFinished
            }
        ];

        localStorage.setItem('data', JSON.stringify(result));
        localStorage.setItem('activeTasksCountData', JSON.stringify(tasksBacklog.length));
        localStorage.setItem('finishedTasksCountData', JSON.stringify(tasksFinished.length));
    }

    let mainPage = (
        <main className='main'>
            <KanbanBoardFirstSection tasksCurrent={tasksBacklog} titleCurrent='Backlog' updateTasks={updateTasks}/>
            <KanbanBoardAnotherSection tasksPrevious={tasksBacklog} tasksCurrent={tasksReady} titlePrevious='Backlog' titleCurrent='Ready' updateTasks={updateTasks}/>
            <KanbanBoardAnotherSection tasksPrevious={tasksReady} tasksCurrent={tasksInProgress} titlePrevious='Ready' titleCurrent='In Progress' updateTasks={updateTasks}/>
            <KanbanBoardAnotherSection tasksPrevious={tasksInProgress} tasksCurrent={tasksFinished} titlePrevious='In Progress' titleCurrent='Finished' updateTasks={updateTasks}/>
        </main>
    );

    let taskPage = (
        <main className='main'>
            <KanbanBoardTaskInfo updateTasks={updateTasks}/>
        </main>
    );

    return (
        <Routes>
            <Route path='/' element={mainPage}/>
            <Route path='tasks/*' element={taskPage}/>
        </Routes>
    );
}

export default KanbanBoardMain;