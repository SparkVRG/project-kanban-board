import React, { useState } from 'react';
import './KanbanBoardTaskInfo.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function KanbanBoardTaskInfo({updateTasks}) {
    let {state} = useLocation();
    
    let taskID = state.id;
    let taskName = state.name;
    let taskDescription = state.description.trim() === '' ? 'This task has no description' : state.description;
    let tasksCurrent = state.tasksCurrent;
    let titleCurrent = state.titleCurrent;

    let [taskIsEdit, setTaskIsEdit] = useState(false);
    let [taskInputValue, setTaskInputValue] = useState(taskDescription);
    let [taskInputValueResult, setTaskInputValueResult] = useState(taskDescription);

    let taskElementNormal = (
        <button className='task-info__edit task-info__edit_button-edit' onClick={() => setTaskIsEdit(!taskIsEdit)}>Edit</button>
    );

    let taskElementEdit = (
        <>
            <textarea className='task-info__edit task-info__edit_textarea' value={taskInputValue} onChange={event => setTaskInputValue(event.target.value)}/>
            <br />
            <button className='task-info__edit task-info__edit_button-submit' onClick={handlerSubmit}>Submit</button>
        </>
    );

    function handlerSubmit() {
        if (taskInputValue.trim() === '') {
            setTaskIsEdit(!taskIsEdit);
            setTaskInputValue('');
            return;
        }

        setTaskInputValueResult(taskInputValue);

        let result = tasksCurrent.map(item => {
            if (item.id === taskID) {
                item.description = taskInputValue;
            }

            return item;
        })

        setTaskInputValue('');
        setTaskIsEdit(!taskIsEdit);
        updateTasks(result, titleCurrent);
    }

    return (
        <div className='task-info'>
            <h2 className='task-info__title'>{taskName}</h2>
            <p className='task-info__description'>{taskInputValueResult}</p>
            {taskIsEdit ? taskElementEdit : taskElementNormal}
            <Link to='/'>
                <button className='task-info__button-exit'></button>
            </Link>
        </div>
    );
}

export default KanbanBoardTaskInfo;