import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./EditTodo.css";

export function EditTodo({ titleBefore, titleAfter, label, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [todoEdit, setTodoEdit] = useState(label);

    

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleOkClick() {
        setIsEditing(false);
        onEdit(todoEdit);
        console.log("todoedit from editTodo",todoEdit   )
    }

    function onTodoTaskEdit(e) {
        setTodoEdit(e.target.value);
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <input type="text" onChange={onTodoTaskEdit} value={todoEdit}/> 
                    <Button onClick={handleOkClick} title={titleAfter} />
                </div>
            ) : (
                <div>
                    <Button onClick={handleEditClick} title={titleBefore} />
                </div>
            )}
        </div>
    );
}
