import styled from "styled-components";
import { colors } from "../variables";

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const InputField = styled.div`
  align-items: center;
  background: ${colors.white};
  border: 1px solid ${colors.blueGray50};
  border-radius: 4px;
  column-gap: 12px;
  display: flex;
  height: 56px;
  padding: 0 12px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  margin: 0;
  outline: none;
  user-select: none;
  padding: 0;
  width: 100%;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

const IconButton = styled(Button)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const LabelButton = styled(Button)`
  align-items: center;
  background-color: ${colors.brandPrimary};
  border-radius: 32px;
  display: flex;
  height: 56px;
  justify-content: center;
  width: 100%;
`;

export { IconButton, InputField, InputLabel, LabelButton };
