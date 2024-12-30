"use client";

import styled from "styled-components";

type ClientButtonType = {
  width: string;
  color: string;
  padding?: string;
  margin?: string;
  borderRadius?: number;
  backgroundColor: string;
  children: React.ReactNode;
  onClick: () => void;
};

export default function ClientButton({
  width,
  color,
  padding,
  margin,
  borderRadius,
  backgroundColor,
  children,
  onClick,
}: ClientButtonType) {
  return (
    <Button
      width={width}
      color={color}
      padding={padding}
      margin={margin}
      borderradius={borderRadius}
      backgroundcolor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

type ButtonType = {
  width: string;
  color: string;
  padding?: string;
  margin?: string;
  borderradius?: number;
  backgroundcolor: string;
};

const Button = styled.button<ButtonType>`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderradius }) => borderradius}px;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  font-family: RobotoLight;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  }
`;
