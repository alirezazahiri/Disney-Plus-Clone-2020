import styled from "styled-components";

// Components
import ImgSlider from './ImgSlider';
import Viewers from "./Viewers";
// Movie Sections 
import Trendings from './sections/Trendings';
import NewDisneys from './sections/NewDisneys';
import Originals from './sections/Originals';
import Recommends from './sections/Recommends';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisneys />
      <Originals />
      <Trendings />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;