import { ButtonsDiv } from "./styled";
import { Button } from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    toggleHideDone,
    setAllDone,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <ButtonsDiv>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Show" : "Hide"} done
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Complete all
                    </Button>
                </>
            )}
        </ButtonsDiv>
    )
};


export default Buttons;