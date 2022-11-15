import styled from "styled-components";
import { colors, desktopMinWidth } from "../variables";
import Typography from "./Typography";
import { calculateMonthlyAmount, formatAsMoney, getMonthName } from "./utils";

const StyledContainer = styled.div`
  border: 1px solid ${colors.blueGray50};
  border-radius: 8px;
`;

const StyledTopContainer = styled.div`
  align-items: center;
  column-gap: 16px;
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const StyledBottomContainer = styled.div`
  align-items: center;
  background-color: ${colors.blueGray10};
  display: flex;
  padding: 24px 32px;
  justify-content: center;
  text-align: center;

  @media (min-width: ${desktopMinWidth}) {
    text-align: left;
  }
`;

export default function Summary({
  amount,
  months,
  reachDate,
}: {
  amount: number;
  months: number;
  reachDate: Date;
}) {
  return (
    <StyledContainer data-testid="summary">
      <StyledTopContainer>
        <Typography variant="subtitle">Monthly amount</Typography>

        <Typography variant="heading" color={colors.brandSecondary}>
          <strong>
            {formatAsMoney(calculateMonthlyAmount(amount, months))}
          </strong>
        </Typography>
      </StyledTopContainer>

      <StyledBottomContainer>
        <Typography variant="caption">
          You’re planning <strong>{months} monthly deposits</strong> to reach
          your <strong>{formatAsMoney(amount)}</strong> goal by{" "}
          <strong>
            {getMonthName(reachDate.getMonth())} {reachDate.getFullYear()}.
          </strong>
        </Typography>
      </StyledBottomContainer>
    </StyledContainer>
  );
}
