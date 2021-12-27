import { Sponsors } from "../../../common/resource";
import SponsorItem from "./SponsorItem";
import styled from "styled-components";

const SponsorComponent = (props: Record<string, any>) => {
  return (
    <div>
      <SponsorTitle> Sponsored by </SponsorTitle>
      <Container>
        <ContentBox>
          <Sponsor1>
            <SponsorItem sponsor={Sponsors.sponsors[0]} alt="logo.png" />
          </Sponsor1>
          <Sponsor2>
            <SponsorItem sponsor={Sponsors.sponsors[1]} alt="logo.png" />
          </Sponsor2>
        </ContentBox>
      </Container>
    </div>
  );
};

const SponsorTitle = styled.div`
  font-family: Verdana;
  color: purple;
  font-size: 200%;
  background-color: lightskyblue;
  text-align: center;
  padding: 2%;
`;

const Container = styled.div`
  display: grid;
  color: white;
  grid-template-rows: 0.1fr 0.1fr;
  grid-template-areas: "sponsor sponsor";
  text-align: center;
  grid-gap: 0.5rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  justify-content: center;
  grid-area: sponsor;
`;

const Sponsor1 = styled.div`
  background: white;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const Sponsor2 = styled(Sponsor1)``;

export default SponsorComponent;
