import React from 'react';

function Task(props) {

    return (
        <div className="task-item">
            <div>
                <p className="task-title">{props.task.title}</p>
                <p className="task-body">{props.task.body}</p>
            </div>
        </div>
    )
}

export default Task