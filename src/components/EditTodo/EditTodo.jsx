// EditTodo.jsx
import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./EditTodo.css";

export function EditTodo ({ titleBefore, titleAfter, onChange, value, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleOkClick() {
        setIsEditing(false); // Sakrij input polje kada se klikne na "OK" dugme
        onEdit(); 
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <input type="text" onChange={onChange} value={value}/> 
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
