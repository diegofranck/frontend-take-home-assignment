import styled from "styled-components";
import originLogo from "../assets/icons/origin-logo.svg";
import { colors, desktopMinWidth } from "../variables";

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  height: 56px;
  padding: 0 16px;

  @media (min-width: ${desktopMinWidth}) {
    height: 80px;
    padding: 0 56px;
  }
`;

const StyledImage = styled.img`
  width: 75px;

  @media (min-width: ${desktopMinWidth}) {
    width: 100px;
  }
`;

export default function Header() {
  return (
    <StyledHeader data-testid="page-header">
      <StyledImage src={originLogo} alt="Origin Logo" />
    </StyledHeader>
  );
}
