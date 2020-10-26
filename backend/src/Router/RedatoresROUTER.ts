import { logar, cadastrar, recuperarSenha } from "../Api/RedatoresAPI";
import { Router } from "express";
const App = Router();

App.post("/redatores/login", logar);
App.post("/redatores/recuperar-senha", recuperarSenha);
App.post("/redatores/cadastro", cadastrar);

export default App;
