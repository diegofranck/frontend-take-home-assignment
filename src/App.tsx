import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import { colors } from "./variables";

import "./global.css";

const StyledRoot = styled.div`
  background-color: ${colors.blueGray10};
  color: ${colors.blueGray900};
  height: 100vh;
`;

export function App(): JSX.Element {
  return (
    <StyledRoot>
      <Header />
      <Main />
    </StyledRoot>
  );
}
