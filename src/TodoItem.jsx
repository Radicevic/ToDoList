import './App.css';

export default function TodoItem ({ done, id, label, createdAt, onSelect}) {
    return (
        <li onClick={onSelect} className={`listItem ${done ? "done" : ''}`}>
            <span>{id}</span>
            <span>{label}</span>
            <span>{createdAt}</span>
        </li>
   )
}
