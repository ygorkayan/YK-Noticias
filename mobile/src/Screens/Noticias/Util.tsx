import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

export const Header = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px 10px 2px 10px;
  background-color: #1087ff;
  margin-bottom: 5px;
`;

export interface Props {
  route: { params: { categoria: string } };
}

type noticia = {
  id: number;
  banner: ImageSourcePropType;
  titulo: string;
  data_publicacao: number;
};

export const estadoInicial: Array<noticia> = [];
