import { useState } from "react";

import "./LogInForm.css";
import { Button } from "../Button/Button";
import { ToDos } from "../../services/TodoService";

export function LogInForm (){
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    const payload = { username: userName, password: password }

    // function inputUserName (e){
    //     setUserName(e.target.value)
    // }

    function inputPassword (e){
        setPassword(e.target.value)
    }

    async function submit (){
        if (password.length < 4 ){
            setErrorMessage("Password must be longer than 4 characters");
            return;
        }
        try {
            const response = await ToDos.logIn(payload);
            console.log("Response: ", response);
            console.log("Credentials: ", payload);

            setUserName("");
            setPassword("");
            setErrorMessage("Login successful");

            console.log("Token: ", response.token)
            localStorage.setItem("token", response.token)
        }
        catch (message){
            console.log("message: ", message)
            setErrorMessage(message.response.data.message)
        }
      
    }


    return (
        <><label> User name
            <input type="text" onChange={((e) => setUserName(e.target.value))} value={userName} />
        </label>
        <label> Password
            <input type="password" onChange={inputPassword} value={password} />
        </label>
        <p>{errorMessage}</p>
        <Button onClick={submit} title={"LogIn"} />
        
        </>
)
}