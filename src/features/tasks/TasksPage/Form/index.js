import { useState, useRef } from "react";
import { MainForm, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if(!trimmedNewTaskContent){
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));
        
        setNewTaskContent("");
        inputRef.current.focus();
    }
    
    return (
        <MainForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="What should I do?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button className="form__button">Add task</Button>
        </MainForm>
    )
}

export default Form;