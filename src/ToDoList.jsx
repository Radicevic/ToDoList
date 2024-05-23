import './App.css';

export default function TodoList ({ isIncludes, id, label, createdAt, className, onSelect}) {
    return (
    <div className='todoListContainer'>
       <ul className='list'>
        <li onClick={onSelect} className={isIncludes ? "done" : "list-item"} id={'to-do-item'} >
            <p>{id}</p>
            <p>{label}</p>
            <p>{createdAt}</p>
        </li>
       </ul>
   </div>
   )
}
