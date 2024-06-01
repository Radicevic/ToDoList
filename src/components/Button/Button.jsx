import "./Button.css"

export function Button ({onClick, title}){
    return (
        <button className="deleteButton" onClick={onClick}>{title}</button>
    )
}
