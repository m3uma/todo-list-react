import { MainSection, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <MainSection>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </MainSection>
)

export default Section;