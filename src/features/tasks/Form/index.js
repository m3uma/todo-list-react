import { useState, useRef } from "react";
import { MainForm, Input, Button } from "./styled";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if(!trimmedNewTaskContent){
            return;
        }
        
        addNewTask(trimmedNewTaskContent);
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