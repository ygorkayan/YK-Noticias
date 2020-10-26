import React from "react";
import { TouchableNativeFeedback } from "react-native";
import styled from "styled-components/native";
import Texto from "./Texto";
import { TrasformaEmData } from "./Data";
import { useNavigation } from "@react-navigation/native";

const Card = styled.View`
  margin-bottom: 25px;
  height: 350px;
  overflow: hidden;
  margin: 0px 5px 10px 5px;
  border-radius: 2px;
  border: 1px solid #e5e5e5;
`;

const Image = styled.Image`
  width: 100%;
  height: 60%;
`;

const Info = styled.View`
  height: 40%;
  justify-content: space-around;
  padding: 18px 10px 10px 10px;
`;

interface Props {
  id: number;
  banner: any;
  titulo: string;
  data_publicacao: number;
}

export default (props: Props) => {
  const { id, banner, titulo, data_publicacao } = props;

  const nav = useNavigation();

  return (
    <TouchableNativeFeedback onPress={() => nav.navigate("Leitor", { id })}>
      <Card>
        <Image source={{ uri: banner }} />
        <Info>
          <Texto size={18} weight={700} align="center">
            {titulo}
          </Texto>

          <Texto size={12} weight={700} align="right">
            {TrasformaEmData(data_publicacao)}
          </Texto>
        </Info>
      </Card>
    </TouchableNativeFeedback>
  );
};
