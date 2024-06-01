import { Button } from '../Button/Button'

import './Task.css'

export function Task ({onDelete, done, id, label, onToggle}) {
    return (
        <div className={`list-item ${done ? "done" : ''}`}>
            <div onClick={onToggle} className='todo-text'>
                <span>{id}</span>
                <span>{label}</span>
            </div>
            <div className='todo-actions'><Button onClickDeleteTask={onDelete} title={"Delete"}/></div>
        </div>
    )
}
