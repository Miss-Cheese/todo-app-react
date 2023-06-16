import React from 'react';

function Task(props) {

    // add tag validation
    // after they're done typing, check validation
    // if it fails, open the browser pop up to inform that tag can only have 
    // numbers and letters
    // something like this:
    // let pattern = new RegExp("/([A-Z0-9_])\w");
    // pattern.test(props.tags[0])

    return (
        <div className="task-item">
            <div>
                <p className="task-title">{props.task.title}</p>
                <p className="task-body">{props.task.body}</p>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Task