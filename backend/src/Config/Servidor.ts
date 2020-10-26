import Express from "express";
import Db from "./Db";
import Cors from "cors";
import Config from "../../config.json";
import NoticiasROUTER from "../Router/NoticiasROUTER";
import RedatoresROUTER from "../Router/RedatoresROUTER";

const App = Express();

App.use(Cors());
App.use(Express.json());
App.use(NoticiasROUTER);
App.use(RedatoresROUTER);
App.use("/static", Express.static(Config.caminhoAbsolutoPastaStatic));

export function iniciarServidor() {
  App.listen(Config.porta, () => {
    Db.connect((err) => {
      if (err)
        throw new Error("Servidor ou banco de Dados nao pode ser inicializado");

      console.log(Config.msgServidorOnline);
      console.log(Config.msgDbOnline);
    });
  });
}
