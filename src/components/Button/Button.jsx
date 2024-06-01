import "./Button.css"

export function Button ({onClickDeleteTask, title}){
    return (
        <button className="deleteButton" onClick={onClickDeleteTask}>{title}</button>
    )
}