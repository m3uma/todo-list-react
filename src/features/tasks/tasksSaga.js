import { takeLatest, call, put } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice"

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Something goes wrong!");
    }
}

export function* watchFetchExampleTasks () {
    console.log("Saga jest podłączona!");
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}