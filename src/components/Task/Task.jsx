import './Task.css'

export function Task ({ done, id, label, onSelect}) {
    return (
        <div onClick={onSelect} className={`list-item ${done ? "done" : ''}`}>
            <div className='todo-text'>
                <span>{id}</span>
                <span>{label}</span>
            </div>
            <div className='todo-actions'></div>
        </div>
    )
}
