import { Button } from '../Button/Button'

import './Task.css'

export function Task ({ error, isLoading, onDelete, done, id, label, onToggle }) {
    return (
        <div className={`list-item ${done ? "done" : ''}`}>
            <div onClick={onToggle} className='todo-text'>
                <span>{id}</span>
                <span>{label}</span>
            </div>
            <p>{isLoading ? "Loadig..." : ""}</p>
            
            {!isLoading && error ? <p>{error}</p> : <></>}

            <div className='todo-actions'><Button onClick={onDelete} title={"Delete"}/></div>
        </div>
    )
}
