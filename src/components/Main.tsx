import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import DashboardPage from "../pages/dashboard";
import GoalDetailPage from "../pages/goal-detail";
import { desktopMinWidth } from "../variables";

const StyledMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 32px 0 64px;
  row-gap: 24px;

  @media (min-width: ${desktopMinWidth}) {
    margin: 48px 0 96px;
  }
`;

export default function Main() {
  return (
    <StyledMain data-testid="main-component">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/:slug" element={<GoalDetailPage />} />
        </Routes>
      </BrowserRouter>
    </StyledMain>
  );
}
