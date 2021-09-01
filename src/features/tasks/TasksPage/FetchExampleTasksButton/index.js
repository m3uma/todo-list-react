import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Button } from "../Button";

const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                    ? "Loading..."
                    : "Download sample tasks"
            }
        </Button>
    );
};

export default FetchExampleTasksButton;