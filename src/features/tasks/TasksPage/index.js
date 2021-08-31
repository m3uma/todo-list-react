import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="TO DO LIST" />
      <Section
        title="Add new task..."
        body={<Form />}
      />

      <Section
        title="Search"
        body={<Search />}
      />

      <Section
        title="To do list"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />

    </Container>

  );
}

export default TasksPage;
