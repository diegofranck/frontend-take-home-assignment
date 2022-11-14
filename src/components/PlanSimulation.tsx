import React, { useRef, useState } from "react";
import styled from "styled-components";
import buyAHouseLogo from "../assets/icons/buy-a-house.svg";
import { colors, desktopMinWidth, mobileMinWidth } from "../variables";
import Amount from "./Amount";
import { LabelButton } from "./Button";
import ReachDate, { ChangeActionType } from "./ReachDate";
import Summary from "./Summary";
import Typography from "./Typography";
import { createDate, monthDiff } from "./utils";

const StyledSection = styled.section`
  background: ${colors.white};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 24px 20px 40px;
  row-gap: 24px;
  width: 100%;

  @media (min-width: ${desktopMinWidth}) {
    padding: 32px 32px 40px;
    width: 560px;
  }
`;

const StyledHeader = styled.header`
  align-items: center;
  column-gap: 16px;
  display: grid;
  grid-template-columns: 64px 1fr;
`;

const StyledHeaderRight = styled.div`
  display: grid;
  row-gap: 4px;
`;

const StyledMain = styled.main`
  display: grid;
  grid-auto-flow: row;
  margin-bottom: 8px;
  row-gap: 16px;

  @media (min-width: ${desktopMinWidth}) {
    column-gap: 16px;
    grid-auto-flow: initial;
    grid-template-areas:
      "amount reach-date"
      "summary summary";
    grid-template-columns: 1.5fr 1fr;
    row-gap: 24px;
  }
`;

const StyledGridArea = styled.div<{
  gridArea: React.CSSProperties["gridArea"];
}>`
  grid-area: unset;

  @media (min-width: ${desktopMinWidth}) {
    grid-area: ${(props) => props.gridArea};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;

  @media (min-width: ${mobileMinWidth}) {
    align-self: center;
    width: 320px;
  }
`;

export default function PlanSimulation() {
  const currentDate = useRef(createDate({ day: 1 }));

  const [amount, setAmount] = useState<number | null>(null);
  const [reachDate, setReachDate] = useState<Date>(
    createDate({
      day: 1,
      month: currentDate.current.getMonth(),
      year: currentDate.current.getFullYear(),
    })
  );

  // Adding 1 month considering that the current
  // month is the start of the saving goal.
  const monthlyDeposits = monthDiff(currentDate.current, reachDate) + 1;

  function onChangeDate(action: ChangeActionType) {
    const amount = action === "increment" ? 1 : -1;

    setReachDate((_reachDate) => {
      const nextDate = new Date(_reachDate.getTime());
      nextDate.setMonth(nextDate.getMonth() + amount);

      return nextDate;
    });
  }

  return (
    <StyledSection>
      <StyledHeader>
        <img src={buyAHouseLogo} alt="Plan Simulation Logo Type" />

        <StyledHeaderRight>
          <Typography variant="heading" size="small">
            Buy a house
          </Typography>

          <Typography variant="paragraph" color={colors.blueGray400}>
            Saving goal
          </Typography>
        </StyledHeaderRight>
      </StyledHeader>

      <StyledMain>
        <StyledGridArea gridArea="amount">
          <Amount
            label="Total amount"
            onChange={(amount) => setAmount(amount)}
          />
        </StyledGridArea>

        <StyledGridArea gridArea="reach-date">
          <ReachDate
            currentDate={currentDate.current}
            reachDate={reachDate}
            label="Reach goal by"
            onChange={onChangeDate}
          />
        </StyledGridArea>

        <StyledGridArea gridArea="summary">
          <Summary
            amount={amount}
            months={monthlyDeposits}
            reachDate={reachDate}
          />
        </StyledGridArea>
      </StyledMain>

      {!!amount && monthlyDeposits >= 1 && reachDate && (
        <ButtonWrapper>
          <LabelButton onClick={() => console.log("On Confirm called")}>
            <Typography variant="button" color={colors.white}>
              Confirm
            </Typography>
          </LabelButton>
        </ButtonWrapper>
      )}
    </StyledSection>
  );
}