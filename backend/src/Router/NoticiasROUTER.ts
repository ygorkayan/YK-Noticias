import {
  buscarNoticias,
  ultimasNoticias,
  pegarNoticia,
} from "../Api/NoticiasAPI";
import { Router } from "express";
const App = Router();

App.get("/noticias/categoria/:categoria", buscarNoticias);
App.get("/noticias/leitor/:id", pegarNoticia);
App.get("/noticias/ultimas-noticias", ultimasNoticias);

export default App;
