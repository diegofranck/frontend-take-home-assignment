import { useEffect, useRef } from "react";
import CurrencyInput from "react-currency-input-field";
import styled from "styled-components";
import dollarSignIcon from "../assets/icons/dollar-sign.svg";
import { colors } from "../variables";
import * as Styled from "./components";
import Typography from "./Typography";

const CurrencyInputField = styled(CurrencyInput)`
  border: none;
  color: ${colors.blueGray600};
  font-family: "Rubik";
  font-size: 20px;
  outline: none;
  width: 100%;
`;

export default function Amount({
  label,
  onChange,
}: {
  label: string;
  onChange: (amount: number) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Styled.InputLabel>
      <Typography variant="description">{label}</Typography>

      <Styled.InputField>
        <img src={dollarSignIcon} alt="Dollar Sign Logo" />

        <CurrencyInputField
          ref={inputRef}
          allowNegativeValue={false}
          decimalSeparator="."
          decimalsLimit={2}
          groupSeparator=","
          onValueChange={(amount) => onChange(Number(amount))}
        />
      </Styled.InputField>
    </Styled.InputLabel>
  );
}
