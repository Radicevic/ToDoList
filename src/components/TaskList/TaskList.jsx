import { Task } from "../Task/Task";

import './TaskList.css';

export function TaskList({ todoList, deleteTask, updateTask }) {
    return (
        <div className="task-list">
          {
              todoList.map((item) =>
              <Task
                  todo={item}
                  key={item.id}
                  onDelete={deleteTask}
                  onToggle={updateTask}
              />)
          }
        </div>
    );
}
