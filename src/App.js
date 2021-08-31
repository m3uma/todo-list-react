import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styled";

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/tasks">Tasks</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/author">About author</StyledNavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/tasks/:id">
                    <TaskPage />
                </Route>
                <Route path="/tasks">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/tasks" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

export default App;

