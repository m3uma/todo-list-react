import { useState } from "react";
import { MainForm, Input, Button } from "./styled";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if(!trimmedNewTaskContent){
            return;
        }
        
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    }
    
    return (
        <MainForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                className="form__input"
                placeholder="What should I do?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button className="form__button">Add task</Button>
        </MainForm>
    )
}

export default Form;