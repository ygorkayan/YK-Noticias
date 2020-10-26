import Db from "../Config/Db";

function executarQuery(query: string): Promise<Array<Object>> {
  return new Promise((resolver, reject) =>
    Db.query(query, (err, result) => {
      if (err) return reject(err);
      resolver(result);
    })
  );
}

export enum tiposNoticias {
  tecnologia = "tecnologia",
  games = "games",
}

export function buscarNoticiasPorCategoria(
  categoria: tiposNoticias,
  pular: number,
  pegar: number
): Promise<Array<Object>> {
  const query: string = `select id, titulo, data_publicacao, banner 
    from noticias 
    where categoria = '${categoria}'
    ORDER BY id DESC
    limit ${pular}, ${pegar}`;

  return executarQuery(query);
}

export function buscarNoticiasPorId(id: number): Promise<Array<Object>> {
  const query: string = `select id, titulo, autor, data_publicacao, banner, 
  texto from noticias where id = '${id}'`;

  return executarQuery(query);
}

export function buscarUltimasNoticias(): Promise<Array<Object>> {
  const umDiaEmMilleSegundos: number = 86400000;
  const vinteQuatroHorasAtras = new Date().getTime() - umDiaEmMilleSegundos;
  const query: string = `select id, titulo, data_publicacao, banner 
  from noticias 
  where data_publicacao >= '${vinteQuatroHorasAtras}'
  ORDER BY id DESC`;

  return executarQuery(query);
}
