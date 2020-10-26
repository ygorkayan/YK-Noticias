import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Noticias from "./Screens/Noticias/Noticias";
import Leitor from "./Screens/Leitor/Leitor";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Ultimas Noticias">
        <Drawer.Screen
          name="Ultimas Noticias"
          component={Noticias}
          initialParams={{ categoria: "ultimas-noticias" }}
        />

        <Drawer.Screen
          name="Games"
          component={Noticias}
          initialParams={{ categoria: "games" }}
        />

        <Drawer.Screen
          name="Tecnologia"
          component={Noticias}
          initialParams={{ categoria: "tecnologia" }}
        />

        <Drawer.Screen
          name="Leitor"
          component={Leitor}
          options={{ drawerLabel: "" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
