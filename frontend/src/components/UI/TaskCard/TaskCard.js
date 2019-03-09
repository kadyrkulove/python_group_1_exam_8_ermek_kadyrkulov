import React from 'react';
import {NavLink} from 'react-router-dom';
import './TaskCard.css';

function TaskCard (props) {

    const TASK_LINK = "/task/" + props.task.id;

    return (
        <div className='mt-4' key={props.task.id}>
            <div className='task-container'>
                <h5>{props.task.summary}</h5>
                <div className='task-text-container'>
                    <p className='task-description'>{props.task.description}</p>
                </div>
                <p>{props.task.last_edited}</p>
                <NavLink className="nav-link" to={TASK_LINK}>
                    <button className='btn btn-info'>See more</button>
                </NavLink>
            </div>
        </div>
    )
};

export default TaskCard;