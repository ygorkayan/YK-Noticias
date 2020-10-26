import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  height: 400px;
  width: 420px;
  background-color: #d6d6d6;
  border-radius: 0.5rem;
  padding: 1rem;
`;

interface Props {
  children: any;
}

const Container = (props: Props) => {
  return <ContainerStyle>{props.children}</ContainerStyle>;
};

export default Container;
