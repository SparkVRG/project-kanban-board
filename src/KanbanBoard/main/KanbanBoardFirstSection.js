import React, { useState } from 'react';
import './KanbanBoardSections.css';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

function KanbanBoardFirstSection({tasksCurrent, titleCurrent, updateTasks}) {
    let items = tasksCurrent.map(item => {
        return (
            <Link key={item.id} to={'tasks/' + item.id} state={{ id: item.id, name: item.name, description: item.description, tasksCurrent: tasksCurrent, titleCurrent: titleCurrent}}>
                <li className='task-section__item'>
                    {item.name}
                </li>
            </Link>
        );
    });

    let [newTaskIsEdit, setNewTaskIsEdit] = useState(false);
    let [newTaskInputValue, setNewTaskInputValue] = useState('');

    let newTaskElementNormal = (
        <button className='task-section__add task-section__add_button-add' onClick={() => setNewTaskIsEdit(!newTaskIsEdit)}>+ Add card</button>
    );

    let newTaskElementEdit = (
        <>
            <input className='task-section__add task-section__add_input' value={newTaskInputValue} placeholder='New task title...' onChange={event => setNewTaskInputValue(event.target.value)}/>
            <button className='task-section__add task-section__add_button-submit' onClick={handlerSubmit}>Submit</button>
        </>
    );

    function handlerSubmit() {
        if (newTaskInputValue.trim() === '') {
            setNewTaskIsEdit(!newTaskIsEdit);
            setNewTaskInputValue('');
            return;
        }

        let newTask = {
            id: nanoid(),
            name: newTaskInputValue,
            description: ''
        };

        let newTasksCurrent = tasksCurrent.slice(0);
        newTasksCurrent.push(newTask);

        setNewTaskInputValue('');
        setNewTaskIsEdit(!newTaskIsEdit);
        updateTasks(newTasksCurrent, titleCurrent);
    }

    return (
        <section className='task-section'>
            <h2 className='task-section__title'>{titleCurrent}</h2>
            <ul className='task-section__list'>
                {items}
            </ul>
            {newTaskIsEdit ? newTaskElementEdit : newTaskElementNormal}
        </section>
    );
}

export default KanbanBoardFirstSection;