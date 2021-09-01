import { toAuthor, toTasks } from "../routes";
import { List, Item, StyledNavLink } from "./styled";

const Navigation = () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Tasks</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>About author</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};

export default Navigation;