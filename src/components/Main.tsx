import styled from "styled-components";
import { colors, desktopMinWidth } from "../variables";
import PlanSimulation from "./PlanSimulation";
import Typography from "./Typography";

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
      <Typography
        data-testid="page-subtitle"
        variant="subtitle"
        color={colors.brandPrimary}
      >
        Let's plan your <strong>saving goal.</strong>
      </Typography>

      <PlanSimulation />
    </StyledMain>
  );
}
