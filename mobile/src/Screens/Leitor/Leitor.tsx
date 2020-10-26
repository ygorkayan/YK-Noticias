import React, { useState, useEffect } from "react";
import Texto from "../../Components/Texto";
import BannerPagina from "../../Components/Banner";
import { buscarNoticiasPorId } from "../../Components/BuscarNoticias";
import { TrasformaEmData } from "../../Components/Data";
import { Props, Banner, Leitor } from "./Util";

export default (props: Props) => {
  const [banner, setBanner] = useState("http://");
  const [titulo, setTitulo] = useState("");
  const [dataPublicacao, setDataPublicacao] = useState(0);
  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");

  type T = {
    banner: string;
    titulo: string;
    data_publicacao: string;
    autor: string;
    texto: string;
  };

  useEffect(() => {
    const id = props.route.params.id;
    buscarNoticiasPorId(id).then((resp) => {
      setBanner(resp.banner);
      setTitulo(resp.titulo);
      setDataPublicacao(resp.data_publicacao);
      setAutor(resp.autor);
      setTexto(resp.texto);
    });
  }, [props.route.params.id]);

  return (
    <React.Fragment>
      <BannerPagina />
      <Leitor>
        <Banner source={{ uri: banner }} />
        <Texto padding="28px 10px" align="center" size={20} weight={700}>
          {titulo}
        </Texto>

        <Texto padding="8px 0px 0px 12px" size={16} weight={500}>
          Autor: {autor}
        </Texto>

        <Texto padding="0px 0px 15px 12px" size={16} weight={500}>
          Publicacao: {TrasformaEmData(dataPublicacao)}
        </Texto>

        <Texto size={18} weight={500} padding="12px" height={28}>
          {texto}
        </Texto>
      </Leitor>
    </React.Fragment>
  );
};
