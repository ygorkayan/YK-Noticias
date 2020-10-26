import Axios from "axios";

const ip = "http://192.168.0.3:4000";
const urlImg = `${ip}/static/img/`;

export type Noticia = {
  id: number;
  titulo: string;
  banner: string;
  autor: string;
  data_publicacao: number;
  texto?: string;
};

function attUrlParaBanner(noticia: Noticia) {
  return { ...noticia, banner: `${urlImg}${noticia.banner}` };
}

function arrayOuObjeto(valor: Array<Noticia> | Noticia) {
  if (Array.isArray(valor)) {
    return valor.map((noticia) => attUrlParaBanner(noticia));
  } else {
    return attUrlParaBanner(valor);
  }
}

function buscar(url: string) {
  return new Promise((resolver, reject) => {
    Axios.get(`${ip}${url}`)
      .then((sucesso) => {
        resolver(arrayOuObjeto(sucesso.data));
      })
      .catch(reject);
  });
}

export function buscarNoticiasPorCategoria(categoria: string) {
  if (categoria === "ultimas-noticias") {
    return buscar("/noticias/ultimas-noticias");
  }

  return buscar(`/noticias/categoria/${categoria}`);
}

export function buscarNoticiasPorId(id: number) {
  return buscar(`/noticias/leitor/${id}`);
}
