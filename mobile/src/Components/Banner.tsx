import React from "react";
import styled from "styled-components/native";
import Texto from "./Texto";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const View = styled.View`
  background-color: #1087ff;
  height: 12%;
  align-items: flex-end;
  padding: 10px 0px;
  flex-direction: row;
`;

const Menu = styled.View`
  margin-left: 10px;
  margin-right: 35px;
`;

export default () => {
  const nav: any = useNavigation();

  return (
    <View>
      <Menu>
        <Icon
          name="menu"
          size={40}
          color="#e7e7e7"
          onPress={() => nav.openDrawer()}
        />
      </Menu>

      <Texto size={32} weight={700} transform="uppercase" cor="#e7e7e7">
        YK Noticias
      </Texto>
    </View>
  );
};
