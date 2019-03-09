import React, {Fragment, Component} from 'react'
import {NavLink} from "react-router-dom";
import axios from 'axios';
import './TaskList.css';
import TaskCard from '../../components/UI/TaskCard/TaskCard';

const TASKS_URL = 'http://localhost:8000/api/v1/tasks';

class TaskList extends Component {
    state = {
        tasks: [],
        backlog: null,
        progress: null,
        done: null
    };

     componentDidMount() {
        axios.get(TASKS_URL)
            .then(response => {
                console.log(response.data);
                const tasks = response.data;
                let backlog = [];
                let progress = [];
                let done = [];

                for(let i = 0; i < tasks.length; i++) {
                    if(tasks[i].status === "backlog") {
                        backlog.push(tasks[i])
                    } else if (tasks[i].status === 'progress') {
                        progress.push(tasks[i])
                    } else {
                        done.push(tasks[i])
                    }
                }

                this.setState({
                    progress: progress, done: done, backlog: backlog
                });
            })
            .catch(error => console.log(error));
    }


    render() {
        console.log(this.state);

        return <Fragment>
            <p><NavLink to='/tasks/add'>add task</NavLink></p>
            {!this.state.backlog || !this.state.progress || !this.state.done ? <div>Loading</div> : <div className='row'>
                <div className='col-4 task-status-field'>
                    <h3>queue</h3>
                    {this.state.backlog.map(task => {
                        return <TaskCard task={task}/>
                    })}
                </div>
                <div className='col-4 task-status-field'>
                    <h3>on_the_job</h3>
                    {this.state.progress.map(task => {
                        return <TaskCard task={task}/>
                    })}
                </div>
                <div className='col-4 task-status-field'>
                    <h3>Сделано</h3>
                    {this.state.done.map(task => {
                        return <TaskCard task={task}/>
                    })}
                </div>
            </div>}
        </Fragment>
    }
}

export default TaskList;