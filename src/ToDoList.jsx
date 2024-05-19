import './App.css';


export default function TodoList ({ id, label, createdAt, className }) {
    return (
    <div className='todoListContainer'>
       <ul className='list'>
        <li className={`${className} list-item`} id={'to-do-item'} >
            <p>{id}</p>
            <p>{label}</p>
            <p>{createdAt}</p>
        </li>
       </ul>
   </div>
   )
   }
