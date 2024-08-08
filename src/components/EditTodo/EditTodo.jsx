import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./EditTodo.css";

export function EditTodo({ label, onEdit }) {
    const [inputValue, setInputValue] = useState(label);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleOkClick() {
        setIsEditing(false);
        onEdit(inputValue);
    }

    function onInputChange(e) {
        setInputValue(e.target.value);
    }

    const buttonLabel = isEditing ? 'OK' : 'Edit';
    const handleClick = isEditing ? handleOkClick : handleEditClick;

    return (
        <div>
            {/*{isEditing && <input type="text" onChange={onInputChange} value={inputValue}/>}*/}
            {isEditing ? <input type="text" onChange={onInputChange} value={inputValue}/> : <></>}
            <Button onClick={handleClick} title={buttonLabel}/>
        </div>
    );
}
