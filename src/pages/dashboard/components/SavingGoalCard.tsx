import styled from "styled-components";
import { LabelButton } from "../../../components/Button";
import Typography from "../../../components/Typography";
import { formatAsMoney, getMonthName } from "../../../components/utils";
import { PersistedGoal } from "../../../types";
import { colors } from "../../../variables";

const StyledSection = styled.section`
  background: #ffffff;
  border: 1px solid ${colors.blueGray50};
  box-shadow: 0px 8px 24px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  display: grid;
  grid-auto-flow: row;
  row-gap: 20px;
  padding: 20px 16px 24px;
`;

const StyledHeader = styled.header`
  align-items: center;
  display: grid;
  column-gap: 16px;
  grid-template-columns: 64px 1fr;
`;

const GoalSection = styled.div`
  border: 1px solid ${colors.blueGray50};
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 8px 16px;
`;

const ButtonWrapper = styled.header`
  width: 100%;
`;

export default function SavingGoalCard({
  icon,
  label,
  goal,
  onClick,
}: {
  icon: string;
  label: string;
  goal: PersistedGoal | null;
  onClick: () => void;
}) {
  const reachDate = goal && new Date(goal.reachDate);

  return (
    <StyledSection>
      <StyledHeader>
        <img src={icon} alt="Saving Goal Icon" />
        <Typography color={colors.blueGray900} variant="paragraph">
          <strong>{label}</strong>
        </Typography>
      </StyledHeader>

      {goal && reachDate && (
        <GoalSection>
          <div>
            <Typography variant="caption" color={colors.blueGray600}>
              Goal amount
            </Typography>
            <Typography variant="paragraph" color={colors.brandSecondary}>
              <strong>{formatAsMoney(goal.amount)}</strong>
            </Typography>
          </div>

          <div>
            <Typography variant="caption" color={colors.blueGray600}>
              Reach goal by
            </Typography>

            <Typography variant="paragraph" color={colors.blueGray900}>
              <strong>
                {getMonthName(reachDate.getMonth())} {reachDate.getFullYear()}
              </strong>
            </Typography>
          </div>
        </GoalSection>
      )}

      <ButtonWrapper>
        <LabelButton data-testid="setup-goal-button" onClick={onClick}>
          <Typography variant="button" color={colors.white}>
            Setup Goal
          </Typography>
        </LabelButton>
      </ButtonWrapper>
    </StyledSection>
  );
}
