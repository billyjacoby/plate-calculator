import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--headerBGColor);
  color: var(--headerFontColor);
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  max-width: 800px;
`;

const MainHeading = styled.h1`
  padding: 0;
  margin: 0;
`;

const SubHeading = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <InnerContainer>
        <div>
          <MainHeading>plate calculator</MainHeading>
          <SubHeading>get strong, not smart</SubHeading>
        </div>
        <div>
          <a href="#">Github</a>
        </div>
      </InnerContainer>
    </HeaderStyled>
  );
}
