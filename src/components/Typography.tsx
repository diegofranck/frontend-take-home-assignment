import styled from "styled-components";
import { desktopMinWidth } from "../variables";

export type TypographyVariants =
  | "heading"
  | "subtitle"
  | "description"
  | "paragraph"
  | "caption"
  | "button";

export interface TypographyProps {
  variant?: TypographyVariants;
  color?: string;
  size?: "small" | "medium";
  children?: React.ReactNode;
  props?: React.HTMLAttributes<any>;
}

const TypographyHeading = styled.h1<TypographyProps>`
  color: ${(props) => props.color};
  font-family: "Rubik", sans-serif;
  font-size: ${(props) => (props.size === "small" ? "20px" : "24px")};
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 1.2;

  @media (min-width: ${desktopMinWidth}) {
    font-size: ${(props) => (props.size === "small" ? "24px" : "32px")};
  }
`;

const TypographySubtitle = styled.h2<TypographyProps>`
  color: ${(props) => props.color};
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.2;

  & > strong {
    font-weight: 600;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 20px;
  }
`;

const TypographyParagraph = styled.p<TypographyProps>`
  color: ${(props) => props.color};
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;

  & > strong {
    font-weight: 600;
  }

  @media (min-width: ${desktopMinWidth}) {
    font-size: 16px;
  }
`;

const TypographyDescription = styled.span<TypographyProps>`
  color: ${(props) => props.color};
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;

  @media (min-width: ${desktopMinWidth}) {
    font-size: 14px;
  }
`;

const TypographyCaption = styled.span<TypographyProps>`
  color: ${(props) => props.color};
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0px;

  & > strong {
    font-weight: 600;
  }
`;

const TypographyButton = styled.span<TypographyProps>`
  color: ${(props) => props.color};
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
`;

function getComponent(variant: TypographyVariants) {
  return {
    heading: TypographyHeading,
    subtitle: TypographySubtitle,
    description: TypographyDescription,
    paragraph: TypographyParagraph,
    caption: TypographyCaption,
    button: TypographyButton,
  }[variant];
}

export default function Typography({
  variant = "caption",
  color,
  size = "medium",
  children,
  ...props
}: TypographyProps) {
  const Component = getComponent(variant);

  return (
    <Component color={color} size={size} {...props}>
      {children}
    </Component>
  );
}
