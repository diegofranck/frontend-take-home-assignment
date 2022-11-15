import React from "react";
import styled from "styled-components";
import chevronLeft from "../assets/icons/chevron-left.svg";
import { colors } from "../variables";
import * as Styled from "./styled";
import { IconButton } from "./Button";
import Typography from "./Typography";
import { getMonthName } from "./utils";

const ReachDateInputField = styled(Styled.InputField)`
  display: grid;
  grid-template-columns: 48px 96px 48px;
  padding: 0;
`;

const InputValue = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const InputHidden = styled.input`
  border: none;
  height: 0;
  position: absolute;
  padding: 0;
  width: 0;
`;

const ImageRotated = styled.img`
  transform: rotate(180deg);
`;

export default function ReachDate({
  currentDate,
  reachDate,
  label,
  onDecrement,
  onIncrement,
}: {
  currentDate: Date;
  reachDate: Date;
  label: string;
  onDecrement: () => void;
  onIncrement: () => void;
}) {
  const backButtonDisabled =
    reachDate.getMonth() <= currentDate.getMonth() &&
    reachDate.getFullYear() <= currentDate.getFullYear();

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft" && !backButtonDisabled) {
      onDecrement();
    } else if (e.key === "ArrowRight") {
      onIncrement();
    }
  }

  return (
    <Styled.InputLabel htmlFor="reachdate" data-testid="reach-date-label">
      <Typography variant="description">{label}</Typography>

      <ReachDateInputField>
        <IconButton
          data-testid="decrement-button"
          disabled={backButtonDisabled}
          onClick={onDecrement}
          onKeyDown={onKeyDown}
        >
          <img src={chevronLeft} alt="Chevron Left" />
        </IconButton>

        <InputHidden
          readOnly
          aria-hidden
          type="text"
          id="reachdate"
          data-testid="reach-date-input"
          onKeyDown={onKeyDown}
          value={reachDate.toDateString()}
        />

        <InputValue>
          <Typography variant="paragraph">
            <strong>{getMonthName(reachDate.getMonth())}</strong>
          </Typography>

          <Typography variant="paragraph" color={colors.blueGray400}>
            {reachDate.getFullYear()}
          </Typography>
        </InputValue>

        <IconButton
          data-testid="increment-button"
          onClick={onIncrement}
          onKeyDown={onKeyDown}
        >
          <ImageRotated src={chevronLeft} alt="Chevron Right" />
        </IconButton>
      </ReachDateInputField>
    </Styled.InputLabel>
  );
}
