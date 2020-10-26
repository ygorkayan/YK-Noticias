import React from "react";
import styled from "styled-components/native";

interface Props {
  size: number;
  weight: number;
  cor?: string;
  transform?: string;
  align?: string;
  padding?: string;
  height?: number;
  children: any;
}

export default (props: Props) => {
  const Texto = styled.Text`
    color: ${props.cor || "#262626"};
    font-size: ${props.size}px;
    font-weight: ${props.weight};
    text-transform: ${props.transform || "none"};
    text-align: ${props.align || "left"};
    padding: ${props.padding || "0px"};
    line-height: ${props.height || props.size}px;
  `;

  return <Texto>{props.children}</Texto>;
};
