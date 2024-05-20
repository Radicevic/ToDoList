import './App.css';


export default function TodoList ({ id, label, createdAt, className, onSelect}) {
    return (
    <div className='todoListContainer'>
       <ul className='list'>
        <li className={`${className} list-item`} id={'to-do-item'} >
            <p>{id}</p>
            <p>{label}</p>
            <p>{createdAt}</p>
            <button onClick={onSelect}>Change state</button>
        </li>
       </ul>
   </div>
   )
   }
