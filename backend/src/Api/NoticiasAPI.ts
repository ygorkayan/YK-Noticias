import {
  tiposNoticias,
  buscarNoticiasPorCategoria,
  buscarNoticiasPorId,
  buscarUltimasNoticias,
} from "../Dao/NoticiasDAO";

import { Request, Response } from "express";

// Gambiarra
function validar(tipo: string) {
  if (tiposNoticias.games == tipo) return tiposNoticias.games;
  if (tiposNoticias.tecnologia == tipo) return tiposNoticias.tecnologia;

  return false;
}

// http://localhost:3000/noticias/:categoria
export function buscarNoticias(req: Request, resp: Response): void {
  const categoria: string = req.params.categoria;
  const pular: number = Number(req.query.pular) || 0;
  const pegar: number = Number(req.query.pegar) || 20;
  const categoriaValida: tiposNoticias =
    validar(categoria) || tiposNoticias.games;

  buscarNoticiasPorCategoria(categoriaValida, pular, pegar).then((noticias) => {
    resp.status(200).json(noticias);
  });
}

// http://localhost:3000/leitor/:id
export function pegarNoticia(req: Request, resp: Response): void {
  const id: number = Number(req.params.id);
  buscarNoticiasPorId(id).then((noticia) => {
    if (noticia.length > 0) {
      resp.status(200).json(noticia[0]);
    } else {
      resp.status(400).json({ msg: `Noticia com id ${id} nao encontrada` });
    }
  });
}

// http://localhost:3000/ultimas-noticias
export function ultimasNoticias(req: Request, resp: Response): void {
  buscarUltimasNoticias().then((noticias) => {
    resp.status(200).json(noticias);
  });
}
