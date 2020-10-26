import styled from "styled-components/native";

export const Leitor = styled.ScrollView``;

export const Banner = styled.Image`
  width: 100%;
  height: 320px;
`;

export interface Props {
  route: { params: { id: number } };
}
