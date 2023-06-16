import React from 'react';
// import Task from './Task'

function Dashboard(props) {

    return (
        <div> 
         {/* { props.currentUser ? 
            <div className='tasks-block'>
                <ul>
                    {
                        props.tasks.map(task => {
                            return <Task 
                                key={task.id} 
                                task={task} 
                                currentUser={props.currentUser}
                            />
                        })
                    }
                </ul>
            </div> : null } */}
        </div>

    )
}

export default Dashboard