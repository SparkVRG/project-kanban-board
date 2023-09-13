import React, { useState } from 'react';
import './KanbanBoardSections.css';
import { Link } from 'react-router-dom';

function KanbanBoardAnotherSection({tasksPrevious, tasksCurrent, titlePrevious, titleCurrent, updateTasks}) {
    let items = tasksCurrent.map(item => {
        return (
            <Link key={item.id} to={'tasks/' + item.id} state={{ id: item.id, name: item.name, description: item.description, tasksCurrent: tasksCurrent, titleCurrent: titleCurrent}}>
                <li className='task-section__item'>
                    {item.name}
                </li>
            </Link>
        );
    });

    let selectItems = tasksPrevious.map(item => {
        return (
            <option key={item.id} value={item.id}>{item.name}</option>
        );
    });

    let [newTaskIsEdit, setNewTaskIsEdit] = useState(false);
    let [newTaskSelectValue, setNewTaskSelectValue] = useState('');

    let newTaskElementNormal = (tasksPrevious.length > 0)
        ? (<button className='task-section__add task-section__add_button-add' onClick={() => setNewTaskIsEdit(!newTaskIsEdit)}>+ Add card</button>)
        : (<button className='task-section__add task-section__add_button-add-disabled' disabled>+ Add card</button>);

    let newTaskElementEdit = (
        <>
            <select className='task-section__add task-section__add_select' value={newTaskSelectValue} onChange={event => setNewTaskSelectValue(event.target.value)}>
                <option value=''>(not selected)</option>
                {selectItems}
            </select>
            {(newTaskSelectValue === '') 
                ? <button className='task-section__add task-section__add_button-submit-disabled' disabled>Submit</button>
                : <button className='task-section__add task-section__add_button-submit' onClick={handlerSubmit}>Submit</button>}
        </>
    );

    function handlerSubmit() {
        let newTask;

        let newTasksPrevious = tasksPrevious.filter(item => {
            if (item.id !== newTaskSelectValue) {
                return true;
            }

            newTask = item;
            return false;
        });

        let newTasksCurrent = tasksCurrent.slice(0);
        newTasksCurrent.push(newTask);

        setNewTaskSelectValue('');
        setNewTaskIsEdit(!newTaskIsEdit);
        updateTasks(newTasksPrevious, titlePrevious);
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

export default KanbanBoardAnotherSection;