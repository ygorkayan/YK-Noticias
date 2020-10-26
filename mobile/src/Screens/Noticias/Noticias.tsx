import React, { useState, useEffect } from "react";
import { ScrollView, FlatList } from "react-native";
import Texto from "../../Components/Texto";
import Banner from "../../Components/Banner";
import { buscarNoticiasPorCategoria } from "../../Components/BuscarNoticias";
import { Header, Props, estadoInicial } from "./Util";
import Card from "../../Components/Card";

export default (props: Props) => {
  const [categoria, setCategoria] = useState(props.route.params.categoria);
  const [noticias, setNoticias] = useState(estadoInicial);

  useEffect(() => {
    buscarNoticiasPorCategoria(categoria).then((resp) => {
      return setNoticias(resp);
    });
  }, []);

  return (
    <React.Fragment>
      <Banner />
      <ScrollView>
        <Header>
          <Texto size={26} weight={700} transform="capitalize" cor="#e7e7e7">
            {categoria.replace("-", " ")}
          </Texto>
        </Header>

        <FlatList
          data={noticias}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Card {...item} />}
        />
      </ScrollView>
    </React.Fragment>
  );
};
