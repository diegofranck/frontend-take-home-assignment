import CurrencyInput from "react-currency-input-field";
import styled from "styled-components";
import dollarSignIcon from "../assets/icons/dollar-sign.svg";
import { colors } from "../variables";
import * as Styled from "./styled";
import Typography from "./Typography";

const AmountInputField = styled(CurrencyInput)`
  border: none;
  color: ${colors.blueGray600};
  font-family: "Rubik";
  font-size: 20px;
  outline: none;
  width: 100%;
`;

export default function Amount({
  label,
  autoFocus,
  onChange,
}: {
  label: string;
  autoFocus?: boolean;
  onChange: (amount: number) => void;
}) {
  return (
    <Styled.InputLabel>
      <Typography variant="description">{label}</Typography>

      <Styled.InputField>
        <img src={dollarSignIcon} alt="Dollar Sign Logo" />

        <AmountInputField
          data-testid="amount-input-field"
          autoFocus={autoFocus}
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
