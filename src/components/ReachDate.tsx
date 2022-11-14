import React, { useRef } from "react";
import styled from "styled-components";
import chevronLeft from "../assets/icons/chevron-left.svg";
import { colors } from "../variables";
import * as Styled from "./components";
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

const ImageRotated = styled.img`
  transform: rotate(180deg);
`;

export type ChangeActionType = "increment" | "decrement";

export default function ReachDate({
  currentDate,
  reachDate,
  label,
  onChange,
}: {
  currentDate: Date;
  reachDate: Date;
  label: string;
  onChange: (action: ChangeActionType) => void;
}) {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const backButtonDisabled =
    reachDate.getMonth() <= currentDate.getMonth() &&
    reachDate.getFullYear() <= currentDate.getFullYear();

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      !prevButtonRef.current?.disabled && onChange("decrement");
    } else if (e.key === "ArrowRight") {
      onChange("increment");
    }
  }

  return (
    <Styled.InputLabel onKeyDown={onKeyDown}>
      <Typography variant="description">{label}</Typography>

      <ReachDateInputField>
        <IconButton
          ref={prevButtonRef}
          disabled={backButtonDisabled}
          onClick={() => onChange("decrement")}
        >
          <img src={chevronLeft} alt="Chevron Left" />
        </IconButton>

        <InputValue>
          <Typography variant="paragraph">
            <strong>{getMonthName(reachDate.getMonth())}</strong>
          </Typography>

          <Typography variant="paragraph" color={colors.blueGray400}>
            {reachDate.getFullYear()}
          </Typography>
        </InputValue>

        <IconButton ref={nextButtonRef} onClick={() => onChange("increment")}>
          <ImageRotated src={chevronLeft} alt="Chevron Right" />
        </IconButton>
      </ReachDateInputField>
    </Styled.InputLabel>
  );
}
